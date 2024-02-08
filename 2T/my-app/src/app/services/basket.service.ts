import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IBasket } from '../interfaces/Basket.interface';
import { Observable } from 'rxjs';
import { IStats } from '../interfaces/Stats.interface';

@Injectable({
  providedIn: 'root'
})
export class BasketService {
  private basketUrlAPI: string = 'https://www.balldontlie.io/api/v1/players?per_page=100&page=';
  private playerStatsUrlAPI: string = 'https://www.balldontlie.io/api/v1/stats/?player_ids[]='; // 237

  constructor(public http: HttpClient) { }

  public getPlayerStats(idPlayer: number): Observable<IStats> {
    return this.http.get<IStats>(this.playerStatsUrlAPI + idPlayer);
  }

  public getPlayers(page: number): Observable<IBasket> {
    const urlWithPage = `${this.basketUrlAPI}?${page}`;

    return this.http.get<IBasket>(urlWithPage);
  }
}
