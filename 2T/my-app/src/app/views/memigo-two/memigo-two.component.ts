import { Component } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import { Meme } from '../../interfaces/required.interface';
import { RequiredService } from '../../services/required.service';

@Component({
  selector: 'app-memigo-two',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './memigo-two.component.html',
  styleUrl: './memigo-two.component.css'
})
export class MemigoTwoComponent {
  public memes: Meme[] = [];
  public currentIndex: number = 0;

  public constructor(public service: RequiredService) { }

  /**
   * Goes to the next position of the carrousel.
   * @returns {void}
   */
  public nextPosition(): void {
    this.currentIndex = (this.currentIndex + 1) % this.memes.length;
  }

  /**
   * Goes to the previous position of the carrousel.
   * @returns {void}
   */
  public prevPosition(): void {
    this.currentIndex = (this.currentIndex - 1 + this.memes.length) % this.memes.length;
  }

  /**
   * Executes the function automatically.
   * @returns {void}
   */
  public ngOnInit(): void {
    this.memes = this.service.getMemes();
  }
}
