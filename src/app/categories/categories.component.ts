import { Component, OnInit, TemplateRef } from '@angular/core';
// import { formArrayNameProvider } from '@angular/forms/src/directives/reactive_directives/form_group_name';
import { CategoriesService } from '../services/categories.service';
import { ToastrService } from 'ngx-toastr';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  name: string;
  parentCategoryName: string;
  description: string;
  id: number;
  parent: number;
  cat = {
    'name': '',
    'parentCategoryName': '',
    'description': ''
  };
  categoryArray: Object;
  categoryDelete: Object;
  categorySearch: string;
  modalRef: BsModalRef;

  constructor(
    private service: CategoriesService,
    private toastr: ToastrService,
    private modalService: BsModalService
         ) {
      this.getCategory();

  }

  // category: object[];
  category: any;
  getCategory() {
    this.service.getCategories()
    .subscribe(data => {
    this.category = data;
    });
  }



editCategory(id) {
this.service.editId = id;
}
  deleteCategory(id) {


    this.service.deleteCategories(id).subscribe(data => {
    this.categoryDelete = data;
    this.toastr.success('You have successfully deleted category');
      this.getCategory();
      this.modalRef.hide();

    });
    // this.toastr.success('Hello world!', 'Toastr fun!');

   }

   searchCategory() {
    if (!this.categorySearch) {
      this.getCategory();
    } else {
     this.service.searchCategories(this.categorySearch).subscribe(data => {
      return this.category = data;
   }); } }



   openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, {class: 'modal-sm'});
  }

  confirm(): void {
    this.modalRef.hide();
  }

  decline(): void {
    this.modalRef.hide();
  }

  ngOnInit() {
    // this.getCategory();
  }
}
