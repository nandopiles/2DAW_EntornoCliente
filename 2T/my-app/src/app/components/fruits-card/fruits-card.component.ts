import { Component, Input } from '@angular/core';
import { FruitsInfo } from '../fruits/fruits.interface';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-fruits-card',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './fruits-card.component.html',
  styleUrl: './fruits-card.component.css'
})
export class FruitsCardComponent {
  @Input() fruit: FruitsInfo = {
    name: '',
    img: ''
  };
}
