import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ObjectInfo } from '../vegetables/object.interface';
import { NgStyle } from '@angular/common';
import { ModalInfo } from '../modal/modal.interface';

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './article.component.html',
  styleUrl: './article.component.css'
})
export class Article {
  @Output() modalInfo = new EventEmitter<ModalInfo>();
  @Input() object: ObjectInfo = {
    name: '',
    text: '',
    img: ''
  }



  /**
   * Emits an event passing the info of the object selected to pop up it in the modal.
   * @param {ObjectInfo} objectSelected
   * @returns {void}
   */
  public displayModal(objectSelected: ObjectInfo): void {
    this.modalInfo.emit(
      {
        title: objectSelected.name,
        img: objectSelected.img
      }
    );
  }
}
