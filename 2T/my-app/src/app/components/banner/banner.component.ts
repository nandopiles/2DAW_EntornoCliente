import { NgStyle } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css'
})
export class BannerComponent {
  public defaultSize: string = '150px';
  public fontSize = this.defaultSize;

  public incrementSize() {
    const customSize: string = '220px';

    this.fontSize = customSize;
  }

  public backToDefaultSize() {
    this.fontSize = this.defaultSize;
  }

}
