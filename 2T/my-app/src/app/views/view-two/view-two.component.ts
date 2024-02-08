import { Component, OnInit } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import { ModalComponent } from '../../components/modal/modal.component';
import { BasketService } from '../../services/basket.service';

@Component({
  selector: 'app-view-two',
  standalone: true,
  imports: [CardComponent, ModalComponent],
  templateUrl: './view-two.component.html',
  styleUrl: './view-two.component.css'
})
export class ViewTwoComponent implements OnInit {
  public actualPage: number = 1;
  public image: string = 'https://graffica.info/wp-content/uploads/2017/08/NBA-logo-png-download-free-1200x675.png';
  public playersInfo: any[] = [];
  public isModalReadyToBeVisible: boolean = false;
  public modalInfo: any = {} // Players Info

  public constructor(public _basketService: BasketService) { }

  /**
   * Fills the info of the modal received from the Card component.
   * @param {ICharacterResult} playerInfo
   * @returns {void}
   */
  public fillInfoModal(playerInfo: any): void {
    let totalPoints = 0;
    let totalRebounds = 0;
    let totalSteals = 0;
    this.isModalReadyToBeVisible = true;

    // Calc Stats
    this._basketService.getPlayerStats(playerInfo.id).subscribe((playerStats) => {
      playerStats.data.forEach((stats => {
        if (stats.pts !== null) totalPoints += stats.pts;
        if (stats.reb !== null) totalRebounds += stats.reb;
        if (stats.stl !== null) totalSteals += stats.stl;
      }))

      this.modalInfo = {
        name: playerInfo.name,
        image: playerInfo.image,
        episodes: [
          { episode: 'Points', name: totalPoints },
          { episode: 'Rebounds', name: totalRebounds },
          { episode: 'Steals', name: totalSteals }
        ]
      }
    });
  }

  /**
   * Handles if the modal has to be popped up or closed.
   * @param {boolean} isModalReadyToPopUp
   * @returns {void}
   */
  public handleModal(isModalReadyToPopUp: boolean): void {
    this.isModalReadyToBeVisible = isModalReadyToPopUp;
  }

  public ngOnInit(): void {
    this._basketService.getPlayers(this.actualPage).subscribe((playersMeta) => {
      playersMeta.data.forEach((player) => {
        this.playersInfo.push(
          {
            id: player.id,
            name: player.first_name + " " + player.last_name,
            image: this.image
          }
        );
      })
    });
  }
}
