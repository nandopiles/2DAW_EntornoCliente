import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, NgClass],
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
}
