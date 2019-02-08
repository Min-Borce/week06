import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoriesComponent } from './categories/categories.component';
import { MenuComponent } from './menu/menu.component';
import { ProductsComponent } from './products/products.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { EditCategoryComponent } from './edit-category/edit-category.component';
import { AddProductComponent } from './add-product/add-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { UserLayoutComponent } from './user-layout/user-layout.component';

const routes: Routes = [
  { path: '', redirectTo: '/categories', pathMatch: 'full' },
  { path: 'categories', component: CategoriesComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'add-category', component: AddCategoryComponent },
  { path: 'edit-category', component: EditCategoryComponent },
  { path: 'add-product', component: AddProductComponent },
  { path: 'edit-product/:id', component: EditProductComponent },
  { path: 'user-layout', component: UserLayoutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
