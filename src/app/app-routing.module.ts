import { MyCartComponent } from './components/User/my-cart/my-cart.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoriesComponent } from './components/Admin/categories/categories.component';
import { MenuComponent } from './components/Admin/menu/menu.component';
import { ProductsComponent } from './components/Admin/products/products.component';
import { AddCategoryComponent } from './components/Admin/add-category/add-category.component';
import { EditCategoryComponent } from './components/Admin/edit-category/edit-category.component';
import { AddProductComponent } from './components/Admin/add-product/add-product.component';
import { EditProductComponent } from './components/Admin/edit-product/edit-product.component';
import { UserLayoutComponent } from './components/User/user-layout/user-layout.component';
import { ProductViewComponent } from './components/User/product-view/product-view.component';


const routes: Routes = [
  { path: '', redirectTo: '/categories', pathMatch: 'full' },
  { path: 'categories', component: CategoriesComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'add-category', component: AddCategoryComponent },
  { path: 'edit-category', component: EditCategoryComponent },
  { path: 'add-product', component: AddProductComponent },
  { path: 'edit-product/:id', component: EditProductComponent },
  { path: 'user-layout', component: UserLayoutComponent },
  { path: 'product-view/:id', component: ProductViewComponent },
  { path: 'my-cart', component: MyCartComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
