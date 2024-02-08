import { NgClass, NgStyle } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [NgStyle, NgClass],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {
  @Input() infoCharacter: any = {};
  @Input() isModalReadyToPopUp: boolean = false;
  @Output() isModalClosed = new EventEmitter<boolean>();

  public closeModal(): void {
    this.isModalReadyToPopUp = false;
    this.isModalClosed.emit(this.isModalReadyToPopUp);
  }
}
