import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Episode, IEpisode } from '../interfaces/IEpisode.interface';
import { Character, ICharacter } from '../interfaces/ICharacter.interface';

@Injectable({
  providedIn: 'root'
})
export class RickyService {
  private generalUrlAPI: string = 'https://rickandmortyapi.com/api';
  private characterUrlAPI: string = this.generalUrlAPI + '/character';
  private episodeUrlAPI: string = this.generalUrlAPI + '/episode';

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

  /**
   * Gets all the episodes that finds with the value specified and the filter option.
   * @param {string} filter
   * @param {string} value
   * @returns {Observable<IEpisode>}
   */
  public getEpisodeFilteredBy(filter: string, value: string): Observable<IEpisode> {
    const urlWithFilter = `${this.episodeUrlAPI}?${filter}=${value}`;

    return this.http.get<IEpisode>(urlWithFilter);
  }
}