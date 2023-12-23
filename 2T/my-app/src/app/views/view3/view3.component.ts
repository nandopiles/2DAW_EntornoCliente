import { NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { TitleInterface } from './view3.interface';

@Component({
  selector: 'app-view3',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './view3.component.html',
  styleUrl: './view3.component.css'
})

export class View3Component {
  public titles: TitleInterface[] = [
    {
      'text': 'Fruits',
      'styles': {
        'background-image': 'url(https://s1.eestatic.com/2021/03/09/ciencia/nutricion/564704609_174935756_1706x960.jpg)',
        'height': '300px',
        'width': '48%',
        'display': 'inline-block',
        'color': 'white'
      }
    },
    {
      'text': 'Vegetables',
      'styles': {
        'background-image': 'url(https://www.lavanguardia.com/files/og_thumbnail/uploads/2021/03/05/60421be64918d.jpeg)',
        'height': '300px',
        'width': '48%',
        'display': 'inline-block',
        'color': 'white'
      }
    }
  ];
}
