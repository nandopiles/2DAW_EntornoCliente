import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { IRequired, Meme } from '../interfaces/required.interface';

@Injectable({
  providedIn: 'root'
})
export class RequiredService {
  private urlAPI: string = 'https://api.imgflip.com/get_memes?q=';
  private memes: Meme[] = [];

  constructor(public http: HttpClient) { }

  /**
   * Returns all the memes from the API.
   * @param {string} param
   * @returns {Observable<IRequired>}
   */
  public getMemesFromAPI(param: string): Observable<IRequired> {
    return this.http.get<IRequired>(this.urlAPI + param);
  }

  /**
     * Gets all the memes into an array.
     * @returns {Meme[]}
     */
  public getMemes(): Meme[] {
    this.getMemesFromAPI("angular").subscribe((response) => {
      response.data.memes.forEach((meme) => this.memes.push(meme));
    })

    return this.memes;
  }
}
