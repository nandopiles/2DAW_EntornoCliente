import { Component } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';
import { RickyService } from '../../services/ricky.service';
import { IEpisode } from '../../interfaces/IEpisode.interface';

@Component({
  selector: 'app-ejercicio1',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './ejercicio1.component.html',
  styleUrl: './ejercicio1.component.css'
})
export class Ejercicio1Component {
  public reactiveForm = new FormGroup({
    category: new FormControl('', { nonNullable: true }),
    name: new FormControl('', { nonNullable: true })
  })
  public categorySubmitted: string = '';
  public nameSubmitted: string = '';
  public infoEpisodes: IEpisode[] = [];

  public constructor(public _rickyService: RickyService) { }

  /**
   * Gets all the info of the episode passed by parameter.
   * @param {string} specificEpisode
   * @returns {void}
   */
  public getEpisodeInfo(specificEpisode: string): void {
    this._rickyService.getEpisode(specificEpisode).subscribe((info) => {
      this.infoEpisodes.push(
        {
          name: info.name,
          episode: info.episode
        }
      )
    });
  }

  /**
     * Gets the urls of all the episodes that appears the character specified.
     * @returns {void}
   */
  public getEpisodesOfCharacterUrl(): void {
    this._rickyService.getCharactersFilteredByFromAPI('name', this.nameSubmitted).subscribe((characters) => {
      characters.results.map((character) => {
        character.episode?.map((episode) => {
          this.getEpisodeInfo(episode);
        })
      })
    });
  }

  /**
   * Handles when the form is submitted.
   * @returns {void}
   */
  public onSubmit(): void {
    this.categorySubmitted = this.reactiveForm.value.category || '';
    this.nameSubmitted = this.reactiveForm.value.name || '';

    if (this.categorySubmitted === 'capitulo') {
      this.getEpisodesOfCharacterUrl();
    } else if (this.categorySubmitted === 'personaje') {
      // other thing
    }
  }
}
