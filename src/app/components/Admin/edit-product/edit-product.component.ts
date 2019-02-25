import { Component, OnInit } from '@angular/core';
import { ProductsInterface } from '../../../model/products';
import { ProductsService } from '../../../services/products.service';
import { ActivatedRoute } from '@angular/router';
import { CategoriesService } from '../../../services/categories.service';
import { Observable } from 'rxjs';
import { AngularFireStorage } from 'angularfire2/storage';
import { finalize } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';


@Component ({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {
  products: ProductsInterface = {} as ProductsInterface;
  prodId: number;
  category: object = [];
  uploadProgress: Observable<number>;
  imgUrl: Observable<string>;
  constructor(
    private service: ProductsService,
    private activeRoute: ActivatedRoute,
    private serviceCat: CategoriesService,
    private afStorage: AngularFireStorage,
    private toastr: ToastrService,
    public router: Router,

  ) { }

  ngOnInit() {
    this.getProducts();
    this.getCategories();
  }
  //  Get Products
  getProducts() {
    this.prodId = this.activeRoute.snapshot.params.id;
    this.service.getProducts(this.prodId).subscribe(data => {
      this.products = data;
    });
  }
  // Update Product
  updateProduct() {
    this.service.updateProducts(this.products.id, this.products).subscribe(data => {
      this.toastr.success('You have edited product successfully');
      this.router.navigate(['/products']);

    });
  }
  // Get categories
  getCategories() {
    this.serviceCat.getCategories().subscribe(data => {
      this.category = data;
    });
  }

  // Upload Image
  upload(event) {
    const randomId = Math.random().toString(36).substring(2);
    const refFile = this.afStorage.ref(randomId);
    const task = refFile.put(event.target.files[0]);
    this.uploadProgress = task.percentageChanges();
    task.snapshotChanges().pipe(finalize(() => {
      refFile.getDownloadURL().subscribe(data => {
        this.products.imageUrl = data;
      });
    })
    ).subscribe(data => console.log(data));
  }
  // Remove Image
  removeImg() {
    this.products.imageUrl = '';
  }
}
