import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
import { CategoriesService } from '../services/categories.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss']
})
export class AddCategoryComponent implements OnInit {
  cat = {
    'name': ''
    // 'parentCategoryId': 1
  };
  name: string;
  categoryArray: Object;
  constructor(
    private service: CategoriesService,
    public router: Router
   ) { }


  submit () {
    this.cat.name = this.name;
    // this.cat.parentCategoryId = this.parent;
    this.service.addCategories(this.cat).subscribe(data => {
    this.categoryArray = data;
      // this.getCategory();
      this.router.navigate(['/categories']);
  });

  }



  editCategory() {

  }
  ngOnInit() {
  }

}
