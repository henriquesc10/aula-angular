import { NonNullAssert } from '@angular/compiler';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule],
  templateUrl: './create.html',
  styleUrl: './create.css'
})
export class Create {
  form = new FormGroup({
    title: new FormControl<string>('', { nonNullable: true, validators: Validators.required, }),
  })

  onSubmit() {
    this.form.controls.title.value;
  };
 
} // Fechamento class Create