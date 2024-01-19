import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgClass, NgStyle } from '@angular/common';
import { Item } from '../../interfaces/response.interface';
import { Meme } from '../../interfaces/required.interface';
import { ModalInfo } from '../../interfaces/modalInfo.interface';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [NgStyle, NgClass],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {
  @Input() itemSelected: ModalInfo = {
    name: '',
    url: ''
  }
  /* @Input() selectedItem: ModalInfo = {
    name: '',
    url: ''
  }; */
  @Input() isModalReadyToPopUp: boolean = false;
  @Output() isModalClosed = new EventEmitter<boolean>();

  /**
   * Closes the modal window.
   * @returns {void}
   */
  public closeModal(): void {
    this.isModalReadyToPopUp = false;
    this.isModalClosed.emit(this.isModalReadyToPopUp);
  }
}