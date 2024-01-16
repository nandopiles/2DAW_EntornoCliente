import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { ObjectInfo } from '../fruits/object.interface';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent {
  @Output() objectInfo = new EventEmitter<ObjectInfo>();
  @Input() object: ObjectInfo = {
    name: '',
    img: ''
  }



  /**
   * Sends the info of the object selected to the parent.
   * @returns {void}
   */
  public showSpecificObject(): void {
    this.objectInfo.emit(this.object);
  }
}
