import { Component, OnInit } from '@angular/core';
import { ProductsInterface } from '../model/products';
import { ProductsService } from '../services/products.service';
import { CategoriesService } from '../services/categories.service';
// import {CategoriesInterface} from '../model/categories';
import { AngularFireStorage } from 'angularfire2/storage';
import { finalize } from 'rxjs/operators';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})


export class AddProductComponent implements OnInit {
  ref;
  task;
  uploadProgress;
  downloadURL;
  imageUrl;
  imgUrl: Observable<string>;
products: ProductsInterface = {} as ProductsInterface;
// category: CategoriesInterface = {} as CategoriesInterface;
category: object = [];
  constructor(
    private service: ProductsService,
    private serviceCat: CategoriesService,
    private afStorage: AngularFireStorage
    ) { }

  ngOnInit() {
this.getCategories();
  }

  upload(event) {
    // debugger;
    const randomId = Math.random().toString(36).substring(2);
    this.ref = this.afStorage.ref(randomId);
    const task = this.ref.put(event.target.files[0]);
    this.uploadProgress = task.percentageChanges();


  this.ref.getDownloadURL().subscribe( data => {
  this.downloadURL = data;
    console.log(data);
  }
       );


  // task
  // .snapshotChanges()
  // .pipe(finalize(() => this.imgUrl = this.ref.getDownloadURL()))
  // .subscribe(data => console.log(data));




  }



  submit() {
this.service.addProducts(this.products).subscribe(data => {
});

  }

getCategories() {
  this.serviceCat.getCategories().subscribe(data => {
    this.category = data;
  });
}

}
