import { NgStyle } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IFoodResult } from '../../interfaces/Results.interface';

@Component({
  selector: 'app-photos',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './photos.component.html',
  styleUrl: './photos.component.css'
})
export class PhotosComponent {
  @Input() foodsInfo: IFoodResult[] = [];
  public isReadyToDisplay: boolean = false;
  public imgSelected: IFoodResult = {
    name: '',
    image: ''
  };
  @Output() infoModal = new EventEmitter<any>();

  public showModal(): void {
    this.infoModal.emit(this.imgSelected);
  }

  public selectImg(food: IFoodResult): void {
    this.isReadyToDisplay = true;
    this.imgSelected = food;
  }
}
