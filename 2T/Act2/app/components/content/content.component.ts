import { Component } from '@angular/core';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {
  public arraySrc: string[] = [
    "https://i.pinimg.com/736x/63/e9/7d/63e97dd43ecf54f43ca6841b5486069c.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/6/6a/Gallet_clamshell_600x600_1.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/a/ab/Gallet_clamshell_600x600_movement.jpg"
  ];
  public index: number = 0;
  public currentImg: string = this.arraySrc[this.index];

  public nextImg(): void {
    this.index = (this.index + 1) % this.arraySrc.length;
    this.currentImg = this.arraySrc[this.index];
  }

  public previousImg(): void {
    this.index = (this.index - 1 + this.arraySrc.length) % this.arraySrc.length;
    this.currentImg = this.arraySrc[this.index];
  }

  public changeImg(option: string): void {
    if (option === 'next') {
      this.nextImg();
    } else {
      this.previousImg();
    }
  }
}
