import { ChangeDetectionStrategy, Component, inject, Injectable } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogContent, MatDialogActions, MatDialogRef, MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';

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


@Injectable({
  providedIn: 'root'
})
export class ConfirmationDialog {

  matDialog = inject(MatDialog);

  constructor() { }

  openDialog(): Observable<boolean> {
    return this.matDialog.open(ConfirmationDialogComponent).afterClosed()
  }

}
