import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
import { CategoriesService } from '../services/categories.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss']
})
export class AddCategoryComponent implements OnInit {

  categories = this.service.list;
  cat = {
    'name': '',
    'parentCategoryName': '',
    'description': ''
  };
  name: string;
  parent: string;
  description: string;


  category: any;

  categoryArray: Object;
  constructor(
    private service: CategoriesService,
    public router: Router,
    private toastr: ToastrService
   ) { }



  submit () {
    // debugger;
    this.cat.name = this.name;
    this.cat.parentCategoryName = this.parent;
    this.cat.description = this.description;
// if (name === "") {
//   this.toastr.warning('please enter name');

// } else {

    this.service.addCategories(this.cat).subscribe(data => {
    // this.categoryArray = data;
      // this.getCategory();
      this.toastr.success('You have successfully added new category');
      this.router.navigate(['/categories']);
  });
// }
  }

  ngOnInit() {
    this.service.getCategories().subscribe(data => {
      this.category = data;
    });
  }

}
