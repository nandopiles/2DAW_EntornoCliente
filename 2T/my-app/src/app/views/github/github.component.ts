import { Component } from '@angular/core';
import { RequestService } from '../../services/request.service';
import { Item } from '../../interfaces/response.interface';

@Component({
  selector: 'app-github',
  standalone: true,
  imports: [],
  templateUrl: './github.component.html',
  styleUrl: './github.component.css'
})
export class GithubComponent {
  public githubUsers: Item[] = [];

  public constructor(public service: RequestService) { }

  /**
   * Gets the info of each github user and saves it into an array.
   * @returns {void}
   */
  public getGithubUserInfo(): void {
    this.service.getUsersFromAPI("developer").subscribe((response) => {
      response.items.forEach(element => {
        this.githubUsers.push(
          {
            avatar_url: element.avatar_url,
            login: element.login
          }
        )
      });
    })
  }
}
