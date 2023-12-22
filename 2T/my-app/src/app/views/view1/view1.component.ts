import { NgStyle } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-view1',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './view1.component.html',
  styleUrl: './view1.component.css'
})
export class View1Component {
  public imgs1: string[] = [
    'https://s1.eestatic.com/2021/03/09/ciencia/nutricion/564704609_174935756_1706x960.jpg',
    'https://frutasolivar.com/wp-content/uploads/2019/02/rawpixel-603025-unsplash-e1579691765526.jpg',
    'https://cdn1.img.sputniknews.lat/img/07e6/0b/08/1132232783_0:257:2731:1793_1920x0_80_0_0_fdbda0e88e9a5ad09cdcc6a7a315c196.jpg'
  ];

  public imgs2: string[] = [
    'https://www.lavanguardia.com/files/og_thumbnail/uploads/2021/03/05/60421be64918d.jpeg',
    'https://estaticos-cdn.prensaiberica.es/clip/7d08691e-b082-4540-ad4f-51dc14f8d23b_16-9-aspect-ratio_default_0.jpg',
    'https://imagenes.20minutos.es/files/image_1920_1080/uploads/imagenes/2023/10/02/morada-blanca-charlota-para-que-se-utiliza-cada-tipo-de-cebolla.jpeg'
  ];

  public backgroundImg: string = "";
  public isGridHidden: boolean = false;
  public isLgImgHidden: boolean = true;



  /**
   * Enlarges the image selected hiding the grid with all the other images.
   * @param {number} index
   * @param {string[]} array
   * @returns {void}
   */
  public enlargeImg(index: number, array: string[]): void {

    this.backgroundImg = array[index];
    this.isGridHidden = true;
    this.isLgImgHidden = false;
  }

  /**
   * Displays the grid with the photos.
   * @returns {void}
   */
  public backToBeginning(): void {
    this.isLgImgHidden = true;
    this.isGridHidden = false;
  }
}
