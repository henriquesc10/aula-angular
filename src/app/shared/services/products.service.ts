import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './interfaces/products.interface'; 


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  httpClient = inject(HttpClient)

  getAll() {
    return this.httpClient.get<Product[]>('/api/products');
  };
}

