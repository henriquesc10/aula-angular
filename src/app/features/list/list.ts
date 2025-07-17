import { Component, inject, signal } from '@angular/core';
import { Product } from '../../shared/interfaces/products.interface';
import { ProductsService } from '../../shared/services/products.service';
import { MatButtonModule } from '@angular/material/button';
import { Cards } from './components/cards/card';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { filter } from 'rxjs';
import { ConfirmationDialog } from '../../shared/services/confirmation-dialog';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [Cards, RouterLink, MatButtonModule],
  templateUrl: './list.html',
  styleUrl: './list.css'
})
export class List {

  products = signal<Product[]>(
    inject(ActivatedRoute).snapshot.data['products']
  );

  constructor() {
    this.loadProducts();
  }

  loadProducts() {
    this.productsService.getAll().subscribe((product) => {
      this.products.set(product);
    });
  }

  productsService = inject(ProductsService);
  router = inject(Router);
  matDialog = inject(MatDialog);
  confirmationDialog = inject(ConfirmationDialog);

  onEdit(product: Product) {
    this.router.navigate(['/edit-product', product.id]);
  }

  onDelete(product: Product) {
    this.confirmationDialog
      .openDialog()
      .pipe(filter((answer) => answer === true))
      .subscribe(() => {
        this.productsService.delete(product.id).subscribe(() => {
          this.productsService.getAll().subscribe((product) => {
            this.products.set(product);
          });
        });
      });
  }
}; // Fecha a classe List