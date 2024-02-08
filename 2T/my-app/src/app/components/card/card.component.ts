import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ICharacterResult } from '../../interfaces/Results.interface';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() object: any = {};

  @Output() infoModal = new EventEmitter<any>();

  public showModal(): void {
    this.infoModal.emit(this.object);
  }
}
