import { Component } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
    selector: 'dialog-elements-example-dialog',
    templateUrl: 'dialog-elements-example-dialog.html',
  })
  export class DialogElementsExampleDialog {
  
    constructor(
      public dialogRef: MatDialogRef<DialogElementsExampleDialog>) {}
  
    onNoClick(): void {
      this.dialogRef.close();
    }
  }
  