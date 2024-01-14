import { Component, Input } from '@angular/core';
import { Student } from '../myInterfaces/student';
import { MatDialog } from '@angular/material/dialog';
import { PopupbioComponent } from './popupbio/popupbio.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  //object of student class provided as input to the component
  @Input() headerInfo! : Student;

    //to show popup dialog
    constructor(public dialog : MatDialog){}

  showPopupDialog(){
    const dialogRef = this.dialog.open(PopupbioComponent, {data: this.headerInfo, width : '450px', height : '450px'});
  
    setTimeout( () => {dialogRef.close()}, 50000);
  }
}
