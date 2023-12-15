import { NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderInfo } from '../../models/header-info.model';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  public readonly FRUITS_INFO: HeaderInfo = {
    backgroundUrl: 'url(https://s1.eestatic.com/2018/11/21/ciencia/nutricion/nutricion-frutas-higiene_354976032_106782952_1706x960.jpg)',
    firstTitle: 'FRUTAS',
    secondTitle: 'Tu frutería de confianza'
  };

  public readonly VEGETABLES_INFO: HeaderInfo = {
    backgroundUrl: 'url(https://phantom-marca.unidadeditorial.es/f26736e71a6bfb79e3a2b0c631a1bf4e/resize/828/f/jpg/assets/multimedia/imagenes/2023/05/30/16854588843943.jpg)',
    firstTitle: 'VERDURAS',
    secondTitle: 'Tu verdulería de confianza'
  };

  // Object that has the info of each topic depending on the user.
  public headerInfo: HeaderInfo = { ...this.FRUITS_INFO };



  /**
   * Changes the info of the header to the new info given by parameter.
   * @param {HeaderInfo} info
   * @returns {void}
   */
  public changeInfo(info: HeaderInfo): void {
    this.headerInfo = { ...info };
  }

  /**
   * Change the info of the header into the Fruits
   * @returns {void}
   */
  public changeFruits(): void {
    this.changeInfo(this.FRUITS_INFO);
  }

  /**
   * Changes the info of the header into the Vegetables.
   * @returns {void}
   */
  public changeVegetables(): void {
    this.changeInfo(this.VEGETABLES_INFO);
  }
}
