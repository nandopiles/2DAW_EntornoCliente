import { Component } from '@angular/core';
import { ObjectInfo } from '../fruits/object.interface';
import { PostComponent } from '../post/post.component';
import { CardComponent } from '../card/card.component';
import { Article } from '../article/article.component';
import { ModalComponent } from '../modal/modal.component';
import { ModalInfo } from '../modal/modal.interface';

@Component({
  selector: 'app-fishes',
  standalone: true,
  imports: [PostComponent, Article, ModalComponent],
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
  public fishSelectedForArticle: ObjectInfo = {
    name: '',
    text: '',
    img: ''
  }
  public modalInfo: ModalInfo = {
    title: '',
    img: ''
  }
  public isSpecificFishHidden: boolean = true;
  public isModalReadyToBeVisible: boolean = false;



  /**
   * Displays the info of the Fish selected and hides the list of all the fishes.
   * @param {ObjectInfo} fishSelected
   * @returns {void}
   */
  public showFishArticle(fishSelected: ObjectInfo): void {
    this.fishSelectedForArticle = fishSelected;
    this.isSpecificFishHidden = !this.isSpecificFishHidden;
  }

  /**
   * Fills the info of the modal received from the Card component.
   * @param {ModalInfo} modalInfo
   * @returns {void}
   */
  public fillInfoModal(modalInfo: ModalInfo): void {
    this.modalInfo = modalInfo;
    this.isModalReadyToBeVisible = true;
  }

  /**
   * Handles if the modal has to be popped up or closed.
   * @param {boolean} isModalReadyToPopUp
   * @returns {void}
   */
  public handleModalToClose(isModalReadyToPopUp: boolean): void {
    this.isModalReadyToBeVisible = isModalReadyToPopUp;
    this.isSpecificFishHidden = true;
  }
}
