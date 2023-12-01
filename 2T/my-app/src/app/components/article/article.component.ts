import { Component } from '@angular/core';

const DEFAULT_IMAGE_URL: string =
  'https://media.meer.com/attachments/a7341a4c1a5bcdedb3e2cf29fcd3fcc9750dff76/store/fill/860/645/403e3c3c6f557a89edf9263164f4556b1f887688fce2c81ad75b03fbb690/Ciudad-de-las-Artes-y-las-Ciencias-de-Valencia.jpg';
let originalColor = 'black';

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [],
  templateUrl: './article.component.html',
  styleUrl: './article.component.css',
})
export class ArticleComponent {
  public currentImage: string = DEFAULT_IMAGE_URL;
  public textColor: string = originalColor;

  public changeImage = (newImageUrl: string): void => {
    this.currentImage = newImageUrl;
  };

  public resetImage = (): void => {
    this.currentImage = DEFAULT_IMAGE_URL;
  };

  public changeColor = (event: MouseEvent): void => {
    const paragraph: HTMLElement = <HTMLElement>event.target;
    const newColor = 'red';

    this.textColor = newColor;
    paragraph.style.color = this.textColor;
  };

  public resetColor = (event: MouseEvent): void => {
    const paragraph: HTMLElement = <HTMLElement>event.target;

    this.textColor = originalColor;
    paragraph.style.color = this.textColor;
  };
}
