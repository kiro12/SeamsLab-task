import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  cartCount = new BehaviorSubject<number>(0);
  isLoggedIn = new BehaviorSubject<boolean>(false);
  private apiUrl = 'https://fakestoreapi.com';

  constructor(private http: HttpClient) { }

  login(payload:any) {
    return this.http.post<any>(`${this.apiUrl}/auth/login`, payload);
  }
  getProductById(id: number) {
    return this.http.get<any>(`${this.apiUrl}/products/${id}`);
  }

}
