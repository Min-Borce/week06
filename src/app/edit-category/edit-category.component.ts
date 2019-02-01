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

cat: any = {
'name': '',
'parentCategoryName': '',
'description': ''
};
// editId: number;
name: string;
parentCategoryName: string;
description: string;
parent: string;
category: any;
  constructor(
    private service: CategoriesService,
    public router: Router,
    private toastr: ToastrService
    ) { }


  editCategory() {
    this.service.editCategories().subscribe(data => {
    this.cat = data;
    this.name = this.cat.name;
    this.parent = this.cat.parentCategoryName;
    this.description = this.cat.description;
    });
  }

  updateCategory() {
    this.cat.name = this.name;
    this.cat.parentCategoryName = this.parent;
    this.cat.description = this.description;
    this.service.updateCategories(this.cat.id, this.cat).subscribe(data => {
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
    this.service.getCategories().subscribe(data => {
      this.category = data;
    });
  }
}
