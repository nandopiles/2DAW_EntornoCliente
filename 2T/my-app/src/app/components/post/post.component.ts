import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { Meme } from '../../interfaces/required.interface';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent {
  @Input() infoCard: Meme = {
    name: '',
    url: ''
  }
  @Output() objectClicked = new EventEmitter<Meme>();

  /**
   * Description
   * @returns {void}
   */
  public selectObject(): void {
    this.objectClicked.emit(this.infoCard);
  }
}
