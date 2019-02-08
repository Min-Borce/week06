import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { ProductsInterface } from '../model/products';
import { CategoriesService } from '../services/categories.service';

@Component({
  selector: 'app-user-layout',
  templateUrl: './user-layout.component.html',
  styleUrls: ['./user-layout.component.scss']
})
export class UserLayoutComponent implements OnInit {
  products: object = [];
  productSearch: string;
  category: any;
  constructor(
    private service: ProductsService,
    private serviceCat: CategoriesService,
  ) { }

  ngOnInit() {
    this.getProducts();
    this.getCategory();
  }
  // Get Products
  getProducts() {
    this.service.getAllProducts()
      .subscribe(data => {
        this.products = data;
      });
  }
    // Get Category
    getCategory() {
      this.serviceCat.getCategories().subscribe(data => {
        this.category = data;
      });
    }
    // Search
    searchProduct() {
      if (!this.productSearch) {
        this.getProducts();
      } else {
        this.service.searchProducts(this.productSearch).subscribe(data => {
          return (this.products = data);
        });
      }
    }
}
