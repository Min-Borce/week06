import { Component, OnInit } from '@angular/core';
import { ProductsInterface } from '../model/products';
import { ProductsService } from '../services/products.service';
import { ActivatedRoute } from '@angular/router';
import { CategoriesService } from '../services/categories.service';
import { Observable } from 'rxjs';
import { AngularFireStorage } from 'angularfire2/storage';
@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {
  products: ProductsInterface = {} as ProductsInterface;
  // id: number;
  prodId: number;
  category: object = [];
  uploadProgress;
  imgUrl: Observable<string>;
  ref;
  task;
  downloadURL;
  constructor(
    private service: ProductsService,
    private activeRoute: ActivatedRoute,
    private serviceCat: CategoriesService,
    private afStorage: AngularFireStorage,
    ) { }

  ngOnInit() {
    this.getProducts();
    this.getCategories();
  }

  getProducts() {
    this.prodId = this.activeRoute.snapshot.params.id;
    this.service.getProducts(this.prodId).subscribe(data => {
      this.products = data;
    });
  }

  updateCategory() {
    this.service.updateProducts(this.products.id, this.products).subscribe(data => {
      console.log('11 ' + data);
      // this.router.navigate(['/categories']);
      // this.toastr.success('You have edited category successfully');

    });
  }

  getCategories() {
    this.serviceCat.getCategories().subscribe(data => {
      this.category = data;
    });
  }


  upload(event) {
    // debugger;
    const randomId = Math.random().toString(36).substring(2);
    this.ref = this.afStorage.ref(randomId);
    const task = this.ref.put(event.target.files[0]);
    this.uploadProgress = task.percentageChanges();


  this.ref.getDownloadURL().subscribe( data => {
  this.downloadURL = data;
  console.log('1 ' + data);
  this.imgUrl = this.downloadURL;

    console.log(this.products);


  }
       );



  // task
  // .snapshotChanges()
  // .pipe(finalize(() => this.imgUrl = this.ref.getDownloadURL()))
  // .subscribe(data => console.log(data));

  }






}
