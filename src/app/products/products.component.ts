import { Component, OnInit, TemplateRef } from '@angular/core';
import { ProductsInterface } from '../model/products';
import { ProductsService } from '../services/products.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
// import { CategoriesService } from '../services/categories.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  // products: ProductsInterface = {} as ProductsInterface;
  products: object = [];
  productSearch: string;
  product: any;
  id: number;
  modalRef: BsModalRef;
  category: any;
  // category: object = [];
  constructor(
    private service: ProductsService,
    // private serviceCat: CategoriesService,
    private modalService: BsModalService
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

  searchProduct() {
    if (!this.productSearch) {
      this.getProducts();
      console.log('search is clicked 1');
    } else  {
     this.service.searchProducts(this.productSearch).subscribe(data => {
      console.log('search  is clicked 2');
      return this.products = data;

   }); } }

  editProduct(id) {
    this.service.editProduct(id).subscribe();
  }
  // editCategory(id) {
  //   this.service.editId = id;
  //   }
  deleteProduct(id) {
    this.service.deleteProducts(id).subscribe(data => {
      this.modalRef.hide();
      this.getProducts();
    });


  }


  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, {class: 'modal-sm'});
  }
  confirm(): void {
    this.modalRef.hide();
  }

  decline(): void {
    this.modalRef.hide();
  }
}
