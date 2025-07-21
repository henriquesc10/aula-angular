import { Component, inject } from '@angular/core';
import { ProductsService } from '../../shared/services/products.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../../shared/interfaces/products.interface';
import { Form } from '../../shared/components/form/form';
import { BackToList } from '../../shared/components/back-to-list/back-to-list';

@Component({
  selector: 'app-edit',
  imports: [Form, BackToList],
  templateUrl: './edit.html',
  styleUrl: './edit.css'
})

export class Edit {

  productsService = inject(ProductsService);
  matSnackBar = inject(MatSnackBar);
  router = inject(Router);

  product: Product = inject(ActivatedRoute).snapshot.data['product'];

  onSubmit(product: Product) {
    this.productsService.put(this.product.id, product).subscribe(() => {
        this.matSnackBar.open('Produto alterado com sucesso!', 'Ok');

        this.router.navigateByUrl('/').catch(console.log);
      });
  };
}
