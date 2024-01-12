import { Component, EventEmitter, Input, Output } from '@angular/core';
import { VegetablesInfo } from '../vegetables/vegetables.interface';
import { NgStyle } from '@angular/common';
import { ModalInfo } from '../modal/modal.interface';

@Component({
  selector: 'app-vegetables-card',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './vegetables-card.component.html',
  styleUrl: './vegetables-card.component.css'
})
export class VegetablesCardComponent {
  @Output() modalInfo = new EventEmitter<ModalInfo>();
  @Input() vegetable: VegetablesInfo = {
    name: '',
    text: '',
    img: ''
  }



  /**
   * Emits an event passing the info of the vegetable selected.
   * @param {VegetablesInfo} vegetableSelected
   * @returns {void}
   */
  public displayModal(vegetableSelected: VegetablesInfo): void {
    this.modalInfo.emit(
      {
        title: vegetableSelected.name,
        img: vegetableSelected.img
      }
    );
  }
}
