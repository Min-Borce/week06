import { Component, OnInit } from "@angular/core";
import { ProductsService } from "../../../services/products.service";
import { ProductsInterface } from "../../../model/products";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-product-view",
  templateUrl: "./product-view.component.html",
  styleUrls: ["./product-view.component.scss"]
})
export class ProductViewComponent implements OnInit {
  products: ProductsInterface = {} as ProductsInterface;
  prodId: number;
  cartNumber: number;
  shopCart = [];

  constructor(
    private service: ProductsService,
    private activeRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.getProducts();
    this.cartNumber = localStorage.length;
  }
  // Get Products
  getProducts() {
    this.prodId = this.activeRoute.snapshot.params.id;
    this.service.getProducts(this.prodId).subscribe(data => {
      this.products = data;
    });
  }
  // Add To Cart
  addToCart(products) {
    if(products.quantity === undefined){
      products.quantity = 1;
    }

    localStorage.setItem(products.id, JSON.stringify(products));
    this.shopCart = JSON.parse(localStorage.getItem(products.id));
    this.cartNumber = localStorage.length;
  }
}
