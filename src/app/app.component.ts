import { Component } from '@angular/core';
import { Student } from './myInterfaces/student';
import myData from '../assets/data/A4.json';
import { ArtDetails } from './myInterfaces/art';
import { CulturesFeatured } from './myInterfaces/art';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'A4martmanu';

  student : Student = {
    A4Name : myData.myDetails.A4Name, 
    A4Email : myData.myDetails.A4Email, 
    A4Login : myData.myDetails.A4Login, 
    A4ID : myData.myDetails.A4ID, 
    A4Photo : myData.myDetails.A4Photo
  }

  artDetails : ArtDetails[]  = myData.artDetails;
  culturesFeatured :  CulturesFeatured[] = myData.culturesFeatured;
}
