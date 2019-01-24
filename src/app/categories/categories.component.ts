import { Component, OnInit } from '@angular/core';
// import { formArrayNameProvider } from '@angular/forms/src/directives/reactive_directives/form_group_name';
import { CategoriesService } from '../services/categories.service';
import { ToastrService } from 'ngx-toastr';

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
  constructor(
    private service: CategoriesService,
    private toastr: ToastrService
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

  ngOnInit() {
    // this.getCategory();
  }
}
