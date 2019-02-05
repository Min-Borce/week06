import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { ProductsInterface } from '../model/products';

@Component({
  selector: 'app-user-layout',
  templateUrl: './user-layout.component.html',
  styleUrls: ['./user-layout.component.scss']
})
export class UserLayoutComponent implements OnInit {
  // products: ProductsInterface = {} as ProductsInterface;
  products: object = [];
  constructor(
    private service: ProductsService,
  ) { }

  ngOnInit() {
    this.getProducts();
  }
  getProducts() {
    this.service.getAllProducts()
    .subscribe(data => {
    this.products = data;
    });
  }
}
