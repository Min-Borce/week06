import { ProductsInterface } from './../model/products';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

public urlPost  = 'http://127.0.0.1:3000/products';
public urlDelete =  'http://127.0.0.1:3000/products/';
// list: ProductsInterface[];
editId: number;
  constructor(private http: HttpClient) { }


  addProducts(product) {
    return this.http.post<ProductsInterface>(this.urlPost, product);
}
  getProducts(id): Observable<any> {
  return this.http.get<any>(this.urlPost + '/' + id);
}
  updateProducts(id, products) {
  return this.http.put<any>(this.urlPost + '/' + id, products);
}
deleteProducts(id) {
  return this.http.delete(this.urlDelete + id);
}
}
