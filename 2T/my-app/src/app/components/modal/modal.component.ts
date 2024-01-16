import { NgClass, NgStyle } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ModalInfo } from './modal.interface';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [NgClass, NgStyle],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {
  @Input() modalProperties: ModalInfo = {
    img: '',
    title: ''
  }
  @Input() isModalReadyToPopUp: boolean = false;
  @Output() isModalClosed = new EventEmitter<boolean>();



  /**
   * Description
   * @returns {void}
   */
  public closeModal(): void {
    this.isModalReadyToPopUp = false;
    this.isModalClosed.emit(this.isModalReadyToPopUp);
  }
}
