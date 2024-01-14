import { Component, Input } from '@angular/core';
import { CulturesFeatured } from '../myInterfaces/art';
import { ArtDetails } from '../myInterfaces/art';

@Component({
  selector: 'app-art-by-culture',
  templateUrl: './art-by-culture.component.html',
  styleUrls: ['./art-by-culture.component.css']
})
export class ArtByCultureComponent {
  @Input() culturesFeaturedList! : CulturesFeatured[];
  @Input() artDetailsList! : ArtDetails[];

  outCulture : string= "";

  createCulture(index: number){

    console.log(index);
    this.outCulture = `
      <h2>${this.culturesFeaturedList[index].culture}</h2><hr> 
    `;

    for(let art of this.artDetailsList){
      if(art.culture === this.culturesFeaturedList[index].culture){
        this.outCulture += `
          <h4>Title: ${art.title}</h4>
          <p><strong>Description:</strong> ${art.description}</p>
          <p><strong>Creator:</strong> ${art.creator}</p>
          <p><strong>Creation Date:</strong> ${art.creation_date}</p>
          <p><strong>Culture:</strong> ${art.culture}</p>
          <p><strong>Technique:</strong> ${art.technique}</p><hr><br>
        `;
      }
    }
  }
}
