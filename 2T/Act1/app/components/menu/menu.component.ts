import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
})
export class MenuComponent {
  public isDisabled: boolean = true;

  public showOrHideList = (event: Event): void => {
    event.stopPropagation();
    this.isDisabled ? (this.isDisabled = false) : (this.isDisabled = true);
  };
}
