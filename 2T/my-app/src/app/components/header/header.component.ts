import { NgClass, NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ContentComponent } from '../content/content.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, NgClass, NgStyle],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  public isView1Selected = true;

  /**
   * Selects the view
   * @param {number} viewNumber
   * @returns {void}
   */
  public selectView(viewNumber: number): void {
    this.isView1Selected = viewNumber === 1;
  }

  /**
   * Gets the background img that is going to have the banner
   * @returns {string}
   */
  public selectBackgroundImg(): string {
    return this.isView1Selected
      ? "url(https://static.eldiario.es/clip/0a1ee554-bcf7-4c32-9c2a-37e76297ef6f_16-9-discover-aspect-ratio_default_0.jpg)"
      : "url(https://www.pixel4k.com/wp-content/uploads/2020/01/rick-and-morty-smith-adventures_1580056495-2048x1199.jpg)"
  }
}
