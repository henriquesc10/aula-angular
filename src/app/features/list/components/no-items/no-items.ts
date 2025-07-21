import { Component } from '@angular/core';
import { MatCard, MatCardContent } from "@angular/material/card";


@Component({
  selector: 'app-no-items',
  imports: [MatCard, MatCardContent],
  templateUrl: './no-items.html',
  styleUrl: './no-items.css'
})
export class NoItems {

}
