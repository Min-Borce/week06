import { Component, OnInit, TemplateRef } from '@angular/core';
import { ProductsInterface } from '../model/products';
import { ProductsService } from '../services/products.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { CategoriesService } from '../services/categories.service';
import { CategoriesInterface } from '../model/categories';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products: object = [];
  productSearch: string;
  product: any;
  id: number;
  modalRef: BsModalRef;
  categoryName: string;
  category: object = [];

  constructor(
    private service: ProductsService,
    private serviceCat: CategoriesService,
    private modalService: BsModalService,
    private toastr: ToastrService,
  ) {}

  ngOnInit() {
    this.getProducts();
    this.getCat();
  }
  // Get Categories
  getCat() {
    this.serviceCat.getCategories().subscribe(data => {
      this.category = data;
    });
  }
  // Get Products
  getProducts() {
    this.service.getAllProducts().subscribe(data => {
      this.products = data;
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
  // Edit Product
  editProduct(id) {
    this.service.editProduct(id).subscribe();
  }
  // Delete Product
  deleteProduct(id) {
    this.service.deleteProducts(id).subscribe(data => {
      this.modalRef.hide();
      this.getProducts();
      this.toastr.success('You have successfully deleted the product');
    });
  }

  // Delete Modal
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, { class: 'modal-sm' });
  }
  confirm(): void {
    this.modalRef.hide();
  }

  decline(): void {
    this.modalRef.hide();
  }
}
