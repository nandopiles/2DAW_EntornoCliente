import { Component, Input } from '@angular/core';
import { NgStyle } from '@angular/common';
import { ObjectInfo } from '../fruits/object.interface';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() object: ObjectInfo = {
    name: '',
    img: ''
  };
}
