import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CategoriesComponent} from './categories/categories.component';
import {MenuComponent} from './menu/menu.component';
import {ProductsComponent} from './products/products.component';

const routes: Routes = [
    {path: 'categories', component: CategoriesComponent},
    {path: 'menu', component: MenuComponent},
    {path: 'products', component: ProductsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
