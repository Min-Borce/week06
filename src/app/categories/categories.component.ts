import { Component, OnInit, TemplateRef } from '@angular/core';
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
  categoryArray: Object;
  categoryDelete: Object;
  categorySearch: string;
  modalRef: BsModalRef;
  category: any;
  cat = {
    name: '',
    parentCategoryName: '',
    description: ''
  };

  constructor(
    private service: CategoriesService,
    private toastr: ToastrService,
    private modalService: BsModalService
  ) {
    this.getCategory();
  }

  // Get Category
  getCategory() {
    this.service.getCategories().subscribe(data => {
      this.category = data;
    });
  }
  // Edit Category
  editCategory(id) {
    this.service.editId = id;
  }
  // Delete Category
  deleteCategory(id) {
    this.service.deleteCategories(id).subscribe(data => {
      this.categoryDelete = data;
      this.toastr.success('You have successfully deleted category');
      this.getCategory();
      this.modalRef.hide();
    });
  }
  // Search
  searchCategory() {
    if (!this.categorySearch) {
      this.getCategory();
    } else {
      this.service.searchCategories(this.categorySearch).subscribe(data => {
        return (this.category = data);
      });
    }
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

  ngOnInit() {
    // this.getCategory();
  }
}
