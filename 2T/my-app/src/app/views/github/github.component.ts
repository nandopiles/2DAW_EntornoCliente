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
   * Get all users and saved it into and array.
   * @returns {void}
   */
  public getUsers(): void {
    this.githubUsers = this.service.getGithubUserInfo("developer");
  }
}
