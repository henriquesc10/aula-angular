import { Component, inject } from '@angular/core';
import { Product } from '../../shared/services/interfaces/products.interface';
import { ProductsService } from '../../shared/services/products.service';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [],
  templateUrl: './list.html',
  styleUrl: './list.css'
})
export class List {

  products: Product[] = [];

  productsService = inject(ProductsService);

  ngOnInit() {
    this.productsService.getAll().subscribe((products) => {
      this.products = products;
    });
  }
}
