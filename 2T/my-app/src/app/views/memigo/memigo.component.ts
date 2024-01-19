import { Component } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import { RequestService } from '../../services/request.service';
import { Meme } from '../../interfaces/required.interface';
import { RequiredService } from '../../services/required.service';

@Component({
  selector: 'app-memigo',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './memigo.component.html',
  styleUrl: './memigo.component.css'
})
export class MemigoComponent {
  public memes: Meme[] = [];

  public constructor(public service: RequiredService) { }

  /**
     * Gets all the memes into an array.
     * @returns {void}
     */
  public getMemes(): void {
    this.service.getMemesFromAPI("angular").subscribe((response) => {
      response.data.memes.forEach((meme) => this.memes.push(meme));
    })
  }

  /**
   * Executes the function automatically.
   * @returns {void}
   */
  public ngOnInit(): void {
    this.getMemes();
  }
}
