import { Component } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogElementsExampleDialog } from './dialog-elements-example-dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public dialog: MatDialog) {}
  title = 'qbeyondProject';

  openDialog() {
    this.dialog.open(DialogElementsExampleDialog);
  }
}


