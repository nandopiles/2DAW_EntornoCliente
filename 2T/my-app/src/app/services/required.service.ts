import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IRequired } from '../interfaces/required.interface';

@Injectable({
  providedIn: 'root'
})
export class RequiredService {
  public urlAPI: string = 'https://api.imgflip.com/get_memes?q=';

  constructor(public http: HttpClient) { }

  /**
   * Returns all the memes from the API.
   * @param {string} param
   * @returns {Observable<IRequired>}
   */
  public getMemesFromAPI(param: string): Observable<IRequired> {
    return this.http.get<IRequired>(this.urlAPI + param);
  }
}
