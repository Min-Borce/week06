import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { formArrayNameProvider } from '@angular/forms/src/directives/reactive_directives/form_group_name';



@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  showForm = false;
  showSubmit = false;
  hideAdd = true;
  name: string;
  parent: number;

  cat = {
    'name': ''
    // 'parentCategoryId': 1
  };
  categoryArray: Object;
  categoryDelete: Object;
  categorySearch: string;
  constructor(private http: HttpClient) {
  }

  // category: object[];
  category: any;
  getCategory = function () {
    this.http.get('http://127.0.0.1:3000/categories').subscribe(data => {
    console.log(data);
    this.category = data;
      console.log(data);

    });
  };


  addNewCategory() {
    this.showForm = true;
    this.showSubmit = true;
    this.hideAdd = false;
  }
  submit () {
    this.cat.name = this.name;
    // this.cat.parentCategoryId = this.parent;
    this.http.post('http://127.0.0.1:3000/categories', this.cat).subscribe(data => {
    this.categoryArray = data;
    this.getCategory();
    // form.resetForm(); 

  });
    this.showForm = false;
    this.showSubmit = false;
    this.hideAdd = true;
  }
  // editCategory(category) { }
  deleteCategory(id) {
    this.http.delete('http://127.0.0.1:3000/categories/' + id).subscribe(data => {
    this.categoryDelete = data;
      this.getCategory();
    });
   }

   searchCategory() {

    if (!this.categorySearch) {
      this.getCategory();
    } else {

     this.http.get('http://localhost:3000/categories?filter[where][name]=' + this.categorySearch).subscribe(data => {
return this.category = data;

   }); } }

  ngOnInit() {
    this.getCategory();
  }
}
