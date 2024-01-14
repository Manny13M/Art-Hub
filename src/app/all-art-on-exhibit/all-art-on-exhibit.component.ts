import { Component, Input } from '@angular/core';
import { ArtDetails } from '../myInterfaces/art';

@Component({
  selector: 'app-all-art-on-exhibit',
  templateUrl: './all-art-on-exhibit.component.html',
  styleUrls: ['./all-art-on-exhibit.component.css']
})
export class AllArtOnExhibitComponent {
  
  @Input() artDetailsInfo! : ArtDetails[];
}
