import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Character, ICharacter } from '../interfaces/Character.interface';
import { Episode } from '../interfaces/Episode.interface';

@Injectable({
  providedIn: 'root'
})
export class RickyService {
  private generalUrlAPI: string = 'https://rickandmortyapi.com/api';
  private characterUrlAPI: string = this.generalUrlAPI + '/character';

  constructor(public http: HttpClient) { }

  /**
   * Gets the info of the episode passed by parameter.
   * @param {string} specificEpisodeUrl
   * @returns {Observable<Episode>}
   */
  public getEpisode(specificEpisodeUrl: string): Observable<Episode> {
    return this.http.get<Episode>(specificEpisodeUrl);
  }

  /**
   * Gets all the characters that finds with the value specified and the filter option. 
   * @param {string} filter
   * @param {string} value
   * @returns {Observable<ICharacter>}
   */
  public getCharactersFilteredBy(filter: string, value: string): Observable<ICharacter> {
    const urlWithFilter = `${this.characterUrlAPI}?${filter}=${value}`;

    return this.http.get<ICharacter>(urlWithFilter);
  }

  /**
   * Gets the info of the character passed by parameter.
   * @param {string} specificCharacterUrl
   * @returns {Observable<Character>}
   */
  public getCharacter(specificCharacterUrl: string): Observable<Character> {
    return this.http.get<Character>(specificCharacterUrl);
  }
}