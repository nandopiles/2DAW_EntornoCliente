import { Component } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';
import { RickyService } from '../../services/ricky.service';
import { IEpisodeResult } from '../../interfaces/IEpisodeResult.interface';

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
  public infoEpisodes: IEpisodeResult[] = [];
  // public charactersInEpisode: Result[] = [];

  public constructor(public _rickyService: RickyService) { }

  /**
   * Gets all the info of the episode passed by parameter.
   * @param {string} specificEpisode
   * @returns {void}
   */
  public getEpisodeInfo(specificEpisode: string): void {
    this._rickyService.getEpisode(specificEpisode).subscribe((episode) => {
      this.infoEpisodes.push(
        {
          name: episode.name,
          episode: episode.episode
        }
      )
    });
  }

  /**
     * Gets the info of all the episodes that appears the character specified.
     * @returns {void}
   */
  public getEpisodesOfCharacter(): void {
    this._rickyService.getCharactersFilteredBy('name', this.nameSubmitted).subscribe((characters) => {
      characters.results.forEach((character) => {
        character.episode.forEach((episode) => {
          this.getEpisodeInfo(episode);
        })
      })
    });
  }

  /**
   * Gets the info of all the characters that appears in the episode chosen.
   * @returns {void}
   */
  public getCharactersOfEpisode(): void {
    this._rickyService.getEpisodeFilteredBy('name', this.nameSubmitted).subscribe((episode) => {

      // console.log(episode.);

      /* episode.characters?.map((character) => {

      }) */
    })
  }

  /**
   * Handles when the form is submitted.
   * @returns {void}
   */
  public onSubmit(): void {
    this.categorySubmitted = this.reactiveForm.value.category || '';
    this.nameSubmitted = this.reactiveForm.value.name || '';

    if (this.categorySubmitted === 'capitulo') {
      this.getEpisodesOfCharacter();
    } else if (this.categorySubmitted === 'personaje') {
      this.getCharactersOfEpisode();
    }
  }
}