import { Component } from '@angular/core';
import { infoPhoto } from '../../interfaces/infoPhoto.interface';
import { ContentComponent } from '../../components/content/content.component';
import { infoPhotos } from './data';

@Component({
  selector: 'app-view-one',
  standalone: true,
  imports: [ContentComponent],
  templateUrl: './view-one.component.html',
  styleUrl: './view-one.component.css'
})
export class ViewOneComponent {
  public infoPhotos: infoPhoto[] = infoPhotos.map((info: infoPhoto) => ({ ...info })); // fill the info with the data located in data.ts file
  public isClicked: boolean = true;

  public changeSizePhoto(data: infoPhoto, index: number): void {
    if (this.isClicked) {
      console.log("clicked");
      this.infoPhotos[index] = {
        images: data.images, // there will be only one, the clicked one
        text: this.infoPhotos[index].text,
        class: data.class // if there
      }
    } else {
      console.log("no clicked");
      this.infoPhotos = infoPhotos.map((info: infoPhoto) => ({ ...info })); // have the initial data with both images. Will call to data.ts file
    }

    this.isClicked = !this.isClicked;
  }
}
