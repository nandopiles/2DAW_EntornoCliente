import { Component, EventEmitter, Input, Output } from '@angular/core';
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
      images: [],
      text: '',
      class: ''
    }
  @Output() data = new EventEmitter<infoPhoto>();

  /**
   * Displays the img selected converting in it with a bigger width.
   * @param {string} photo
   * @returns {void}
   */
  public changeImg(photo: string): void {
    this.infoPhoto.class === 'image-container2'
      ? this.data.emit({ images: [photo], text: this.infoPhoto.text, class: 'image-container' })
      : this.data.emit({ images: [photo], text: this.infoPhoto.text, class: 'image-container2' })
  }
}
