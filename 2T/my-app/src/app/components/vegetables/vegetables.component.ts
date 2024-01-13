import { Component } from '@angular/core';
import { VegetablesInfo } from './vegetables.interface';
import { Article } from '../article/article.component';
import { ModalComponent } from '../modal/modal.component';
import { ModalInfo } from '../modal/modal.interface';

@Component({
  selector: 'app-vegetables',
  standalone: true,
  imports: [Article, ModalComponent],
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
  public modalInfo: ModalInfo = {
    title: '',
    img: ''
  }
  public isModalReadyToBeVisible: boolean = false;



  /**
   * Fills the info of the modal received from the Card component.
   * @param {ModalInfo} modalInfo
   * @returns {void}
   */
  public fillInfoModal(modalInfo: ModalInfo): void {
    this.modalInfo = modalInfo;
    this.isModalReadyToBeVisible = true;
  }

  public handleModalClosed(isModalReadyToPopUp: boolean): void {
    this.isModalReadyToBeVisible = isModalReadyToPopUp;
  }

}
