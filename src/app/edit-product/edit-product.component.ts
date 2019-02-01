import { Component, OnInit } from '@angular/core';
import { ProductsInterface } from '../model/products';
import { ProductsService } from '../services/products.service';
import { ActivatedRoute } from '@angular/router';
import { CategoriesService } from '../services/categories.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {
  products: ProductsInterface = {} as ProductsInterface;
  // id: number;
  prodId: number;
  category: object = [];

  constructor(
    private service: ProductsService,
    private activeRoute: ActivatedRoute,
    private serviceCat: CategoriesService) { }

  ngOnInit() {
    this.getProducts();
    this.getCategories();
  }

  getProducts() {
    this.prodId = this.activeRoute.snapshot.params.id;
    this.service.getProducts(this.prodId).subscribe(data => {
      this.products = data;
    });
  }

  updateCategory() {
    this.service.updateProducts(this.products.id, this.products).subscribe(data => {
      console.log('11 ' + data);
      // this.router.navigate(['/categories']);
      // this.toastr.success('You have edited category successfully');

    });
  }

  getCategories() {
    this.serviceCat.getCategories().subscribe(data => {
      this.category = data;
    });
  }

}
