import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductsService } from '../../shared/services/products.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Form } from "../../shared/components/form/form";
import { Product } from '../../shared/services/interfaces/products.interface';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [Form],
  templateUrl: './create.html',
  styleUrl: './create.css'
})
export class Create {

  productsService = inject(ProductsService);
  matSnackBar = inject(MatSnackBar);
  router = inject(Router);

  form = new FormGroup({
    title: new FormControl<string>('', {
      nonNullable: true,
      validators: Validators.required,
    }),
  })

  onSubmit(product: Product) {
    this.productsService
      .post(product)
      .subscribe(() => {
        this.matSnackBar.open('Produto criado com sucesso!', 'Ok');

        this.router.navigateByUrl('/').catch(console.log);
      });
  };

} // Fechamento class Create