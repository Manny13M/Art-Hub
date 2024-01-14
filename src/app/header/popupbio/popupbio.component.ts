import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HeaderComponent } from '../header.component';

@Component({
  selector: 'app-popupbio',
  templateUrl: './popupbio.component.html',
  styleUrls: ['./popupbio.component.css']
})
export class PopupbioComponent {
  constructor(public dialogRef : MatDialogRef<HeaderComponent>, @Inject(MAT_DIALOG_DATA) public data: any){}
  
  onOkClicked(){
    console.log("Okay Clicked");
    this.dialogRef.close()
  }

  onCancelClicked(){
    console.log("Cancel Clicked");
    this.dialogRef.close()
  }
}
