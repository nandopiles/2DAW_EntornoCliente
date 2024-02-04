import { Component, Input } from '@angular/core';
import { infoPhoto } from '../../interfaces/infoPhoto.interface';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [NgClass],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {
  @Input() infoPhoto: infoPhoto =
    {
      img1: '',
      img2: '',
      text: ''
    }
  public isImgSmall: boolean = true;
  public imgSelected: string | undefined = "";

  /**
   * Displays the img selected converting in it with a bigger width.
   * @param {string} photo?
   * @returns {void}
   */
  public changeImg(photo?: string): void {
    if (this.isImgSmall) {
      this.isImgSmall = false;
      this.imgSelected = photo;
    } else
      this.isImgSmall = true;
  }
}
