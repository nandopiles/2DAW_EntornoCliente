import { Component } from '@angular/core';
import { ContentComponent } from '../../components/content/content.component';
import { infoPhoto } from '../../interfaces/infoPhoto.interface';

@Component({
  selector: 'app-view-two',
  standalone: true,
  imports: [ContentComponent],
  templateUrl: './view-two.component.html',
  styleUrl: './view-two.component.css'
})
export class ViewTwoComponent {
  public infoPhoto: infoPhoto =
    {
      img1: "https://www.nosolorol.com/img/nbp/1/7/9/5/1795-large.jpg",
      img2: "https://i.blogs.es/8c50c2/rick-morty/840_560.jpeg",
      text: "Rick and Morty"
    }
}
