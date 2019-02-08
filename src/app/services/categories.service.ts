import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoriesInterface } from '../model/categories';
import { identifierModuleUrl } from '@angular/compiler';


@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  public urlGetPost = 'http://127.0.0.1:3000/categories';
  public urlDelete = 'http://127.0.0.1:3000/categories/';
  public urlSearch = 'http://localhost:3000/categories?filter[where][name]=';
  list: CategoriesInterface[];
  editId: number;
  id: number;

  constructor(private http: HttpClient) { }

  getCategories(): Observable<CategoriesInterface[]> {
    return this.http.get<CategoriesInterface[]>(this.urlGetPost);
  }

  addCategories(category) {
    return this.http.post<any>(this.urlGetPost, category);
  }

  deleteCategories(id) {
    return this.http.delete(this.urlDelete + id);
  }

  searchCategories(name) {
    return this.http.get(this.urlSearch + name);
  }

  editCategories(): Observable<any> {
    return this.http.get<any>(this.urlGetPost + '/' + this.editId);
  }

  updateCategories(id, category) {
    return this.http.put<any>(this.urlGetPost + '/' + id, category);
  }

}
