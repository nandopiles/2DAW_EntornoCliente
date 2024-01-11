import { Component } from '@angular/core';
import { VegetablesInfo } from './vegetables.interface';
import { VegetablesCardComponent } from '../vegetables-card/vegetables-card.component';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-vegetables',
  standalone: true,
  imports: [VegetablesCardComponent, ModalComponent],
  templateUrl: './vegetables.component.html',
  styleUrl: './vegetables.component.css'
})
export class VegetablesComponent {
  public vegetablesGrid: VegetablesInfo[] = [
    {
      name: 'Lechuga',
      text: 'Lechugas frescas del día',
      img: 'https://www.lavanguardia.com/files/og_thumbnail/uploads/2021/03/05/60421be64918d.jpeg'
    },
    {
      name: 'Tomate',
      text: 'Tomates del Perelló',
      img: 'https://thefoodtech.com/wp-content/uploads/2020/06/Componentes-de-calidad-en-el-tomate-828x548.jpg'
    }
    ,

    {
      name: 'Berenjena',
      text: 'Berenjenas de Almagro',
      img: 'https://estaticos-cdn.prensaiberica.es/clip/7d08691e-b082-4540-ad4f-51dc14f8d23b_16-9-aspect-ratio_default_0.jpg'
    },
    {
      name: 'Cebolla',
      text: 'Cebolla dulce',
      img: 'https://imagenes.20minutos.es/files/image_1920_1080/uploads/imagenes/2023/10/02/morada-blanca-charlota-para-que-se-utiliza-cada-tipo-de-cebolla.jpeg'
    }
  ]
}
