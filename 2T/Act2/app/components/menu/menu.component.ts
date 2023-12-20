import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  public isHidden: boolean = true;

  public showHideMenu() {
    this.isHidden = !this.isHidden;
  }
}
