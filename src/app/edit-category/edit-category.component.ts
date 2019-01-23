import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../services/categories.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.scss']
})
export class EditCategoryComponent implements OnInit {

category: any = {
name: '',
};
name: string;
  constructor(
    private service: CategoriesService,
    public router: Router
    ) { }


  editCategory() {
    // debugger;
    this.service.editCategories().subscribe(data => {
      this.category = data;
// this.service.editData = data;
console.log('XXX ' + this.category);
this.name = this.category.name;
    });
  }

  updateCategory() {
    // debugger;
    this.category.name = this.name;
    this.service.updateCategories(this.category.id, this.category).subscribe(data => {
      this.router.navigate(['/categories']);

    });
    // this.router.navigate(['/categories']);

  }

  ngOnInit() {
    this.editCategory();
  }
}
