import { Component, OnInit } from '@angular/core';
import { ProductsInterface } from '../../../model/products';
import { ProductsService } from '../../../services/products.service';
import { CategoriesService } from '../../../services/categories.service';
// import {CategoriesInterface} from '../model/categories';
import { AngularFireStorage } from 'angularfire2/storage';
import { finalize } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component ({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  id: number;
  uploadProgress: Observable<number>;
  imgUrl: Observable<string>;
  products: ProductsInterface = {} as ProductsInterface;
  category: object = [];

  // urlImage: any;
  constructor(
    private service: ProductsService,
    private serviceCat: CategoriesService,
    private afStorage: AngularFireStorage,
    private toastr: ToastrService,
    public router: Router
  ) {}

  ngOnInit() {
    this.getCategories();
  }
  // Upload Image
  upload(event) {
    const randomId = Math.random()
      .toString(36)
      .substring(2);
    const refFile = this.afStorage.ref(randomId);
    const task = refFile.put(event.target.files[0]);
    this.uploadProgress = task.percentageChanges();
    task
      .snapshotChanges()
      .pipe(
        finalize(() => {
          refFile.getDownloadURL().subscribe(data => {
            this.products.imageUrl = data;
          });
        })
      )
      .subscribe();
  }
  // Remove Image
  removeImg() {
    this.products.imageUrl = '';
  }
  // Submit
  submit() {
    this.service.addProducts(this.products).subscribe(data => {
      this.toastr.success('You have successfully added new product');
      this.router.navigate(['/products']);
    });
  }
  // Get Categories
  getCategories() {
    this.serviceCat.getCategories().subscribe(data => {
      this.category = data;
    });
  }
}
