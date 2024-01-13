import { Component, Input } from '@angular/core';
import { FruitsInfo } from '../fruits/fruits.interface';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() fruit: FruitsInfo = {
    name: '',
    img: ''
  };
}
