import { Component } from '@angular/core';
import { ObjectInfo } from '../fruits/object.interface';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-fishes',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './fishes.component.html',
  styleUrl: './fishes.component.css'
})
export class FishesComponent {
  public fishesGrid: ObjectInfo[] = [
    {
      name: 'Rodaballo',
      text: 'Rodaballo fresco',
      img: 'https://e00-expansion.uecdn.es/assets/multimedia/imagenes/2017/10/19/15084107521488.jpg'
    },
    {
      name: 'Rape',
      text: 'Rape del Cantábrico',
      img: 'https://e00-expansion.uecdn.es/assets/multimedia/imagenes/2017/10/19/15084107530435.jpg'
    }
    ,
    {
      name: 'Mero',
      text: 'Mero del Mediterráneo',
      img: 'https://e00-expansion.uecdn.es/assets/multimedia/imagenes/2017/10/19/15084107493872.jpg'
    },
    {
      name: 'Bonito',
      text: 'Bonito del Norte',
      img: 'https://e00-expansion.uecdn.es/assets/multimedia/imagenes/2017/10/19/15084107503223.jpg'
    },
    {
      name: 'Lubina',
      text: 'Lubina de estero',
      img: 'https://e00-expansion.uecdn.es/assets/multimedia/imagenes/2017/10/19/15084107517092.jpg'
    },
    {
      name: 'San Martín',
      text: 'Pez de San Pedro',
      img: 'https://e00-expansion.uecdn.es/assets/multimedia/imagenes/2017/10/19/15084107498663.jpg'
    }
  ];
  public isPostHidden: boolean = true;
}
