import { Component, inject } from '@angular/core';
import { Product } from '../../shared/services/interfaces/products.interface';
import { ProductsService } from '../../shared/services/products.service';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { Cards } from './components/cards/card';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [Cards, RouterLink, MatButtonModule],
  templateUrl: './list.html',
  styleUrl: './list.css'
})
export class List {

  products: Product[] = [];

  productsService = inject(ProductsService);
  router = inject(Router);

  ngOnInit() {
    this.productsService.getAll().subscribe((products) => {
      this.products = products;
    });
  }

  onEdit() {
    this.router.navigateByUrl('/edit-product');
  }
}
