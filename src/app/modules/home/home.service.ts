import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private apiUrl = 'https://fakestoreapi.com';

  constructor(private http: HttpClient) { }

  getCategories() {
    return this.http.get<any[]>(`${this.apiUrl}/products/categories`);
  }
  getAllProducts() {
    return this.http.get<any[]>(`${this.apiUrl}/products`);
  }

  getProductsByCategory(category: string) {
    return this.http.get<any[]>(`${this.apiUrl}/products/category/${category}`);
  }


  addProduct(product: any) {
    return this.http.post<any>(`${this.apiUrl}/products`, product);
  }

  updateProduct(id: number, product: any) {
    return this.http.put<any>(`${this.apiUrl}/products/${id}`, product);
  }

  deleteProduct(id: number) {
    return this.http.delete<any>(`${this.apiUrl}/products/${id}`);
  }}
