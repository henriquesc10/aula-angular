import { ChangeDetectionStrategy, Component, inject, ViewEncapsulation } from '@angular/core';
import { Product } from '../../shared/interfaces/products.interface';
import { ProductsService } from '../../shared/services/products.service';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { Cards } from './components/cards/card';
import { Router, RouterLink } from '@angular/router';
import { MatDialog, MatDialogActions, MatDialogContent, MatDialogRef } from '@angular/material/dialog';
import { filter } from 'rxjs';

@Component({
  selector: 'app-confirmation-dialog',
  template: `
  <h2 mat-dialog-title>Delete file</h2>
  <mat-dialog-content>
    Tem certeza que quer deletar esse produto?
  </mat-dialog-content>
  <mat-dialog-actions align="start">
    <button mat-button (click)="onNo()">Não</button>
    <button mat-raised-button (click)="onYes()">Sim</button>
  </mat-dialog-actions>
  `,
  imports: [MatButtonModule, MatDialogContent, MatDialogActions],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConfirmationDialogComponent {
  matDialogRef = inject(MatDialogRef);

  onNo() {
    this.matDialogRef.close(false);
  }

  onYes() {
    this.matDialogRef.close(true);
  }
}

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

  ngOnInit() {
    this.productsService.getAll().subscribe((products) => {
      this.products = products;
    });
  }

  onEdit(product: Product) {
    this.router.navigate(['/edit-product', product.id]);
  }

  onDelete(product: Product) {
    this.matDialog.open(ConfirmationDialogComponent)
      .afterClosed()
      .pipe(filter((answer) => answer === true))
      .subscribe(() => {
        this.productsService.delete(product.id).subscribe(() => {
          this.productsService.getAll().subscribe((product) => {
            this.products = product;
          });
        });
      });
  }
}; // Fecha a classe List