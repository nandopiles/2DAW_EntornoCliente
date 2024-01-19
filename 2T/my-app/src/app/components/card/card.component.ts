import { Component, Input } from '@angular/core';
import { NgStyle } from '@angular/common';
import { Meme } from '../../interfaces/required.interface';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() infoCard: Meme = {
    name: '',
    url: ''
  }
}
