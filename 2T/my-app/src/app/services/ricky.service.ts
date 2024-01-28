import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IEpisode } from '../interfaces/IEpisode.interface';
import { ICharacter } from '../interfaces/ICharacter.interface';

@Injectable({
  providedIn: 'root'
})
export class RickyService {
  private generalUrlAPI: string = 'https://rickandmortyapi.com/api';
  private characterUrlAPI: string = this.generalUrlAPI + '/character';
  private episodeUrlAPI: string = this.generalUrlAPI + '/episode';

  constructor(public http: HttpClient) { }

  /**
   * Gets all the characters from de API
   * @returns {Observable<ICharacter>}
   */
  /* public getCharactersFromAPI(): Observable<ICharacter> {
    return this.http.get<ICharacter>(this.characterUrlAPI);
  } */

  public getEpisode(specificEpisodeUrl: string): Observable<IEpisode> {
    return this.http.get<IEpisode>(specificEpisodeUrl);
  }

  /**
   * Gets all the characters that finds with the value specified and the filter option. 
   * @param {string} filter
   * @param {string} value
   * @returns {Observable<ICharacter>}
   */
  public getCharactersFilteredByFromAPI(filter: string, value: string): Observable<ICharacter> {
    const urlWithFilter = `${this.characterUrlAPI}?${filter}=${value}`;

    return this.http.get<ICharacter>(urlWithFilter);
  }
}