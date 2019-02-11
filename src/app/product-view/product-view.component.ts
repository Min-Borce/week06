import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { ProductsInterface } from '../model/products';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.scss']
})
export class ProductViewComponent implements OnInit {
  products: ProductsInterface = {} as ProductsInterface;
  prodId: number;
  constructor(
    private service: ProductsService,
    private activeRoute: ActivatedRoute,

  ) { }

  ngOnInit() {
    this.getProducts();
  }
  getProducts() {
    this.prodId = this.activeRoute.snapshot.params.id;
    this.service.getProducts(this.prodId).subscribe(data => {
      this.products = data;
    });
  }
}
