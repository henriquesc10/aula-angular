import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [],
  templateUrl: './list.html',
  styleUrl: './list.css'
})

export class List {

  products: any[] = [];

  httpClient = inject(HttpClient);

  ngOnInit() {
    this.httpClient.get<any>('/api/products').subscribe((products) => {
      this.products = products;
    });
  }
}
