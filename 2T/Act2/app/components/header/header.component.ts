import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  public opacity: number = 1;
  public title: string = "València";

  public changeOpacity(isEntering: boolean): void {
    this.opacity = isEntering ? 0.2 : 1;
  }

  public changeTitle(): void {
    const secondaryTitle: string = "València Nova!!";

    this.title = secondaryTitle;
  }
}
