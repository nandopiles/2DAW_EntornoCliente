import { Component } from '@angular/core';
import { infoPhoto } from '../../interfaces/infoPhoto.interface';
import { ContentComponent } from '../../components/content/content.component';

@Component({
  selector: 'app-view-one',
  standalone: true,
  imports: [ContentComponent],
  templateUrl: './view-one.component.html',
  styleUrl: './view-one.component.css'
})
export class ViewOneComponent {
  public infoPhotos: infoPhoto[] = [
    {
      img1: "https://i.blogs.es/2cc78a/ordenstarwars/840_560.jpg",
      img2: "https://www.lavanguardia.com/files/image_948_465/uploads/2020/05/04/5fa922920d3b5.png",
      text: "Grupo Uno"
    },
    {
      img1: "https://lumiere-a.akamaihd.net/v1/images/starwars_e58d682b.png",
      img2: "https://i.blogs.es/1da08b/1366_2000-9-/840_560.jpeg",
      text: "Grupo Dos"
    }
  ];
}
