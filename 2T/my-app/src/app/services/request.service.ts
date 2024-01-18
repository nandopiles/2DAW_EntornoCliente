import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IResponse } from '../interfaces/response.interface';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  private urlAPI: string = 'https://api.github.com/search/users?q=';

  constructor(public http: HttpClient) { }

  /**
   * Gets the data from de API.
   * @param {string} param
   * @returns {Observable<IResponse>}
   */
  public getResponse(param: string): Observable<IResponse> {
    return this.http.get<IResponse>(this.urlAPI + param);
  }
}
