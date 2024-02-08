import { Component } from '@angular/core';
import { PhotosComponent } from '../../components/photos/photos.component';
import { ModalComponent } from '../../components/modal/modal.component';
import { IFoodResult } from '../../interfaces/Results.interface';

@Component({
  selector: 'app-view-three',
  standalone: true,
  imports: [PhotosComponent, ModalComponent],
  templateUrl: './view-three.component.html',
  styleUrl: './view-three.component.css'
})
export class ViewThreeComponent {
  public photosVegetables: any = [
    {
      name: 'Lechuga',
      image: 'https://www.lavanguardia.com/files/og_thumbnail/uploads/2021/03/05/60421be64918d.jpeg'
    },
    {
      name: 'Tomate',
      image: 'https://thefoodtech.com/wp-content/uploads/2020/06/Componentes-de-calidad-en-el-tomate-828x548.jpg'
    }
    ,
    {
      name: 'Berenjena',
      image: 'https://estaticos-cdn.prensaiberica.es/clip/7d08691e-b082-4540-ad4f-51dc14f8d23b_16-9-aspect-ratio_default_0.jpg'
    },
    {
      name: 'Cebolla',
      image: 'https://imagenes.20minutos.es/files/image_1920_1080/uploads/imagenes/2023/10/02/morada-blanca-charlota-para-que-se-utiliza-cada-tipo-de-cebolla.jpeg'
    }
  ];

  public photosFruits: any = [
    {
      name: 'Plátanos',
      image: 'https://s1.eestatic.com/2021/03/09/ciencia/nutricion/564704609_174935756_1706x960.jpg'
    },
    {
      name: 'Kiwis',
      image: 'https://frutasolivar.com/wp-content/uploads/2019/02/rawpixel-603025-unsplash-e1579691765526.jpg'
    },
    {
      name: 'Manzanas',
      image: 'https://cdn1.img.sputniknews.lat/img/07e6/0b/08/1132232783_0:257:2731:1793_1920x0_80_0_0_fdbda0e88e9a5ad09cdcc6a7a315c196.jpg'
    },
    {
      name: 'Peras',
      image: 'https://farmaciaribera.es/blog/wp-content/uploads/2020/01/Beneficios-de-comer-peras-1024x680.jpg'
    }
  ];
  public isVegetablesSelected: boolean = false;
  public topicSelected = this.photosFruits;
  public isModalReadyToBeVisible: boolean = false;
  public modalInfo: any = {} // Foods Info

  /**
   * Handles if the modal has to be popped up or closed.
   * @param {boolean} isModalReadyToPopUp
   * @returns {void}
   */
  public handleModal(isModalReadyToPopUp: boolean): void {
    this.isModalReadyToBeVisible = isModalReadyToPopUp;
  }

  public fillInfoModal(food: IFoodResult): void {
    this.modalInfo = food;
    this.isModalReadyToBeVisible = true;
  }

  public selectTopic(isVegetables: boolean): void {
    isVegetables
      ? this.topicSelected = this.photosVegetables
      : this.topicSelected = this.photosFruits;
  }
}
