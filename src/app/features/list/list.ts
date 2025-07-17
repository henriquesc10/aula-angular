import { Component, inject } from '@angular/core';
import { Product } from '../../shared/interfaces/products.interface';
import { ProductsService } from '../../shared/services/products.service';
import { MatButtonModule } from '@angular/material/button';
import { Cards } from './components/cards/card';
import { Router, RouterLink } from '@angular/router';
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

  products: Product[] = [];

  productsService = inject(ProductsService);
  router = inject(Router);
  matDialog = inject(MatDialog);
  confirmationDialog = inject(ConfirmationDialog);

  ngOnInit() {
    this.productsService.getAll().subscribe((products) => {
      this.products = products;
    });
  }

  onEdit(product: Product) {
    this.router.navigate(['/edit-product', product.id]);
  }

  onDelete(product: Product) {
    this.confirmationDialog.openDialog()
      .pipe(filter(answer => answer === true))
      .subscribe(() => {
        this.productsService.delete(product.id).subscribe(() => {
          this.productsService.getAll().subscribe((product) => {
            this.products = product;
          });
        });
      });
  }
}; // Fecha a classe List