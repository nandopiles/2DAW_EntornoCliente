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

  /**
   * Increment the size of the title of the banner.
   * @returns {void}
   */
  public incrementSize(): void {
    const customSize: string = '220px';

    this.fontSize = customSize;
  }

  /**
   * Returns to the default size of the title of the banner.
   * @returns {void}
   */
  public backToDefaultSize(): void {
    this.fontSize = this.defaultSize;
  }
}
