import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../services/categories.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.scss']
})
export class EditCategoryComponent implements OnInit {

category: any = {
name: '',
parentCategoryName: '',
description: ''
};
name: string;
// parentCategoryName: string;
description: string;
parent: string;
  constructor(
    private service: CategoriesService,
    public router: Router,
    private toastr: ToastrService
    ) { }


  editCategory() {
    // debugger;
    this.service.editCategories().subscribe(data => {
      this.category = data;
// this.service.editData = data;
console.log('XXX ' + this.category.description);
this.name = this.category.name;
this.parent = this.category.parentCategoryName;
this.description = this.category.description;
    });
  }

  updateCategory() {
    this.category.name = this.name;
    this.service.updateCategories(this.category.id, this.category).subscribe(data => {
      this.router.navigate(['/categories']);
      this.toastr.success('You have edited category successfully');

    });
    // this.router.navigate(['/categories']);

  }

  backToCategories() {
    this.router.navigate(['/categories']);
  }

  ngOnInit() {
    this.editCategory();
  }
}
