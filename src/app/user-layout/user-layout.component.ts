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
  categorySort: any;
  category: any;
  cartNumber: number;
  shopCart = [];
  constructor(
    private service: ProductsService,
    private serviceCat: CategoriesService,
  ) { }

  ngOnInit() {
    this.getProducts();
    this.getCategory();
    this.cartNumber = localStorage.length;
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
      console.log('2');
      this.service.searchProducts(this.productSearch).subscribe(data => {
        return (this.products = data);
      });
    }
  }

  // Sort By Category
  sortByCategory(id) {
    this.serviceCat.sortCategoryById(id).subscribe(data => {
      this.products = data;
    });
  }

  // Add To Cart
  addToCart(product) {
    localStorage.setItem(product.id, JSON.stringify(product));
    this.shopCart = JSON.parse(localStorage.getItem(product.id));
    this.cartNumber = localStorage.length;
  }
}
