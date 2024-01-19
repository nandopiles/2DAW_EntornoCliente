import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IResponse, Item } from '../interfaces/response.interface';

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  private urlAPI: string = 'https://api.github.com/search/users?q=';
  private githubUsers: Item[] = [];

  constructor(public http: HttpClient) { }

  /**
   * Returns all the user data from de API.
   * @param {string} param
   * @returns {Observable<IResponse>}
   */
  public getUsersFromAPI(param: string): Observable<IResponse> {
    this.githubUsers = [];
    return this.http.get<IResponse>(this.urlAPI + param);
  }

  /**
   * Gets the info of each github user depending on the filter passed by parameter.
   * @param {string} param
   * @returns {Item[]}
   */
  public getGithubUserInfo(param: string): Item[] {
    this.getUsersFromAPI(param).subscribe((response) => {
      response.items.forEach(element => {
        this.githubUsers.push(
          {
            avatar_url: element.avatar_url,
            login: element.login
          }
        )
      });
    })

    return this.githubUsers;
  }
}
