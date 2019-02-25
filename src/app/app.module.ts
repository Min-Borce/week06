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
import { MenuComponent } from './components/Admin/menu/menu.component';
import { CategoriesComponent } from './components/Admin/categories/categories.component';
import { ProductsComponent } from './components/Admin/products/products.component';
import { HttpClientModule } from '@angular/common/http';
import { AddCategoryComponent } from './components/Admin/add-category/add-category.component';
import { CategoriesService } from './services/categories.service';
import { EditCategoryComponent } from './components/Admin/edit-category/edit-category.component';
import { AddProductComponent } from './components/Admin/add-product/add-product.component';
import { EditProductComponent } from './components/Admin/edit-product/edit-product.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { NgxPaginationModule } from 'ngx-pagination';
import { UserLayoutComponent } from './components/User/user-layout/user-layout.component';
import { ProductViewComponent } from './components/User/product-view/product-view.component';
import { FooterComponent } from './components/User/footer/footer.component';
import { MyCartComponent } from './components/User/my-cart/my-cart.component';
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
    UserLayoutComponent,
    ProductViewComponent,
    FooterComponent,
    MyCartComponent,
  ],
  imports: [
    BrowserModule,
    NgxPaginationModule,
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
