import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  endPoint = 'https://ty-shop.herokuapp.com';

  constructor(private http: HttpClient) { }

  addProduct(product: Product) {
    return this.http.post<{
      error: boolean,
      message: string,
      product: Product
    }>(`${this.endPoint}/api/products`, product);
  }

  getProducts() {
    return this.http.get<{
      error: boolean,
      message: string,
      products: Product[]
    }>(`${this.endPoint}/api/products`);
  }

  updateProduct(product: Product) {
    return this.http.put<{
      error: boolean,
      message: string,
      response: Product
    }>(`${this.endPoint}/api/products/${product._id}`, product);
  }

}
