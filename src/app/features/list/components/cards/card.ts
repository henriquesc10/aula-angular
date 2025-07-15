import { Component, computed, EventEmitter, input, Output, output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Product } from '../../../../shared/services/interfaces/products.interface';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './card.html',
  styleUrl: './card.css'
})

export class Cards {
  product = input.required<Product>();

  @Output() edit = new EventEmitter();
  
  productTitle = computed(() => this.product().title);

  onEdit() {
    this.edit.emit();
  }
}
