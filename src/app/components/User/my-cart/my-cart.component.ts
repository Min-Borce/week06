import { Component, OnInit, TemplateRef } from "@angular/core";
import { ProductsService } from "../../../services/products.service";
import { ToastrService } from "ngx-toastr";
import { BsModalService, BsModalRef } from "ngx-bootstrap/modal";
import { Router } from "@angular/router";

@Component ({
  selector: "app-my-cart",
  templateUrl: "./my-cart.component.html",
  styleUrls: ["./my-cart.component.scss"]
})
export class MyCartComponent implements OnInit {
  productSearch: string;
  cartNumber: number;
  localProducts = [];
  counter: number = 0;
  total: number;
  value: number;
  totalSum = 0;
  modalRef: BsModalRef;
  constructor(
    private service: ProductsService,
    private toastr: ToastrService,
    private modalService: BsModalService,
    public router: Router
  ) {}

  ngOnInit() {
    this.counter = localStorage.length;
    this.getProducts();
    this.totalPrice();
  }
  // Get Products From Local Storage
  getProducts() {
    let productss = [];
    let keys = Object.keys(localStorage);
    for (let i = 0; i < keys.length; i++) {
      this.value = JSON.parse(localStorage.getItem(keys[i]));
      productss.push(this.value);
    }
    this.localProducts = productss;
  }

  // Total Price
  totalPrice() {
    this.totalSum = 0;
    for (let i = 0; i < this.localProducts.length; i++) {
      this.localProducts[i].total =
        this.localProducts[i].quantity * this.localProducts[i].price;
      this.total = this.localProducts[i].total;
      this.totalSum += this.total;
    }
  }
  // Change Quantity
  changeQuantity(product) {
    for (let i = 0; i < this.localProducts.length; i++) {
      if (product.id == this.localProducts[i].id) {
        product.quantity = this.localProducts[i].quantity;
        localStorage.setItem(product.id, JSON.stringify(product));
      }
    }
    this.totalPrice();
  }

  // Remove Product From Cart
  removeFromCart(id) {
    localStorage.removeItem(id);
    this.toastr.success("You have successfully removed product from cart");
    this.modalRef.hide();
    this.getProducts();
    this.totalPrice();
    this.counter = localStorage.length;
  }

  // Delete Modal
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, { class: "modal-sm" });
  }

  decline(): void {
    this.modalRef.hide();
  }
  //  Checkout
  checkout() {
    localStorage.clear();
    this.toastr.success(
      "You have bought all the products from the cart. Shoping Cart is empty"
    );
    this.getProducts();
    this.totalPrice();
    this.counter = localStorage.length;
  }
}
