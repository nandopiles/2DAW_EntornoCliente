import { Component } from '@angular/core';
import { RequestService } from '../../services/request.service';
import { IGithub } from '../../interfaces/github.interface';

@Component({
  selector: 'app-github',
  standalone: true,
  imports: [],
  templateUrl: './github.component.html',
  styleUrl: './github.component.css'
})
export class GithubComponent {
  public githubUsers: IGithub[] = [];

  public constructor(public service: RequestService) { }

  /**
   * Gets the info of each github user and saves it into an array.
   * @returns {void}
   */
  public getGithubUserInfo(): void {
    this.service.getResponse("developer").subscribe((response) => {
      response.items.forEach(element => {
        this.githubUsers.push(
          {
            avatarUrl: element.avatar_url,
            username: element.login
          }
        )
      });
    })
  }
}
