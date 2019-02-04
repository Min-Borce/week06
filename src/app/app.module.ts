import { HttpClient } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { ModalModule } from 'ngx-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { CategoriesComponent } from './categories/categories.component';
import { ProductsComponent } from './products/products.component';
import { HttpClientModule } from '@angular/common/http';
import { AddCategoryComponent } from './add-category/add-category.component';
import { CategoriesService } from './services/categories.service';
import { EditCategoryComponent } from './edit-category/edit-category.component';
import { AddProductComponent } from './add-product/add-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireStorageModule } from '@angular/fire/storage';
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CategoriesComponent,
    ProductsComponent,
    AddCategoryComponent,
    EditCategoryComponent,
    AddProductComponent,
    EditProductComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      positionClass: 'toast-top-center',
      timeOut: 5000,
      preventDuplicates: true,

    }),
    ModalModule.forRoot(),
    AngularFireModule.initializeApp({
      apiKey: 'AIzaSyBzBg0OYGhuMTTGJdH5oXmvx_NEuCnYU4k',
      authDomain: 'upload-image-8c7bd.firebaseapp.com',
      databaseURL: 'https://upload-image-8c7bd.firebaseio.com',
      projectId: 'upload-image-8c7bd',
      storageBucket: 'upload-image-8c7bd.appspot.com',
      messagingSenderId: '1044384387678'
    }),
    AngularFireStorageModule
  ],
  providers: [
    CategoriesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
