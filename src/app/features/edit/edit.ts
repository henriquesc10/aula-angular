import { Component, inject } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ProductsService } from '../../shared/services/products.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import id from '@angular/common/locales/id';
import { Product } from '../../shared/services/interfaces/products.interface';

@Component({
  selector: 'app-edit',
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule],
  templateUrl: './edit.html',
  styleUrl: './edit.css'
})

export class Edit {

  productsService = inject(ProductsService);
  matSnackBar = inject(MatSnackBar);
  router = inject(Router);

  product: Product = inject(ActivatedRoute).snapshot.data['product'];

  form = new FormGroup({
    title: new FormControl<string>(this.product.title, {
      nonNullable: true,
      validators: Validators.required,
    }),
  });

  onSubmit() {
    this.productsService
      .put(this.product.id, {
        title: this.form.controls.title.value
      })
      .subscribe(() => {
        this.matSnackBar.open('Produto alterado com sucesso!', 'Ok');

        this.router.navigateByUrl('/').catch(console.log);
      });
  };
}
