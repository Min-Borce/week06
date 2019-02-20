import { Component, OnInit } from '@angular/core';
import { ProductsInterface } from '../model/products';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-my-cart',
  templateUrl: './my-cart.component.html',
  styleUrls: ['./my-cart.component.scss']
})
export class MyCartComponent implements OnInit {
  products: ProductsInterface  [];
  productSearch: string;
  cartNumber: number;
  localProducts = [];
  counter: number =  0;
  total: number;
  value: number;
  totalSum: number;
  // quantity: number =  1;
  constructor(
    private service: ProductsService
  ) { }

  ngOnInit() {
    // this.countItems();
    this.counter = localStorage.length;
    this.getProducts();
    this.totalPrice();
  }
    // Get Products From Local Storage
    getProducts() {
    let keys = Object.keys(localStorage);
    let i = keys.length;
    for ( let i=0; i<keys.length; i++ ) {
      let key = localStorage.key(i);
      this.value = JSON.parse(localStorage.getItem(key));
      this.localProducts.push( this.value );
       }
    }

    // Search
  searchProduct() {
    if (!this.productSearch) {
      this.getProducts();
    } else {
      console.log('2');
      this.service.searchProducts(this.productSearch).subscribe((data: ProductsInterface[]) => {
        return (this.products = data);
      });
    }
  }

  // Total Price
  totalPrice() {
for(let i =0; i<this.localProducts.length; i++){
  this.localProducts[i].total = this.localProducts[i].quantity * this.localProducts[i].price;

}

  }
  // Change Quantity
  changeQuantity(product) {
    for ( let i=0; i<this.localProducts.length; i++) {
        if(product.id == this.localProducts[i].id){
          product.quantity = this.localProducts[i].quantity;
          localStorage.setItem(product.id, JSON.stringify(product));
        }
    }
    this.totalPrice();
  }

}
