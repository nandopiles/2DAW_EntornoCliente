import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RickyService } from '../../services/ricky.service';
import { CardComponent } from '../../components/card/card.component';
import { ICharacterResult, IEpisodeResult } from '../../interfaces/Results.interface';
import { ModalComponent } from '../../components/modal/modal.component';

@Component({
  selector: 'app-view-one',
  standalone: true,
  imports: [ReactiveFormsModule, CardComponent, ModalComponent],
  templateUrl: './view-one.component.html',
  styleUrl: './view-one.component.css'
})
export class ViewOneComponent {
  public reactiveForm = new FormGroup({
    name: new FormControl('')
  });
  public charactersList: ICharacterResult[] = [];
  public isSubmitted: boolean = false;
  public isModalReadyToBeVisible: boolean = false;
  public modalInfo: ICharacterResult = {
    name: '',
    image: '',
    status: '',
    episodes: []
  }
  public actualPage = 1;

  public constructor(public _rickService: RickyService) { }

  /**
   * Fills the info of the modal received from the Card component.
   * @param {ICharacterResult} characterInfo
   * @returns {void}
   */
  public fillInfoModal(characterInfo: ICharacterResult): void {
    this.modalInfo = characterInfo;
    this.isModalReadyToBeVisible = true;
  }

  /**
   * Handles if the modal has to be popped up or closed.
   * @param {boolean} isModalReadyToPopUp
   * @returns {void}
   */
  public handleModal(isModalReadyToPopUp: boolean): void {
    this.isModalReadyToBeVisible = isModalReadyToPopUp;
  }

  /**
   * Displays all the existing characters into cards
   * @returns {void}
   */
  public onSubmit(): void {
    this.isSubmitted = true;
    this._rickService.getCharactersFilteredBy('name', this.reactiveForm.value.name || '').subscribe((characters) => {
      characters.results.forEach((character) => {
        console.log(character.name);
        const characterEpisodes: IEpisodeResult[] = [];

        character.episode.forEach((episode) => {
          this._rickService.getEpisode(episode).subscribe((specificEpisode) => {
            characterEpisodes.push(specificEpisode);
          });
        })
        this.charactersList.push(
          {
            name: character.name,
            image: character.image,
            status: character.status,
            episodes: characterEpisodes
          }
        )
      })
    });
  }
}
