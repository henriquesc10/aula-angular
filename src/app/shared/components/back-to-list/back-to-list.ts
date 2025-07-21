import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-back-to-list',
  imports: [RouterLink, MatButtonModule],
  templateUrl: './back-to-list.html',
  styleUrl: './back-to-list.css'
})
export class BackToList {

}
