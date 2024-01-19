import { Component } from '@angular/core';
import { IGithub } from '../../interfaces/github.interface';
import { RequestService } from '../../services/request.service';
import { ModalComponent } from '../../components/modal/modal.component';

@Component({
  selector: 'app-github-two',
  standalone: true,
  imports: [ModalComponent],
  templateUrl: './github-two.component.html',
  styleUrl: './github-two.component.css'
})
export class GithubTwoComponent {
  public githubAngularUsers: IGithub[] = [];
  public userSelected: IGithub = {
    avatarUrl: '',
    username: ''
  }
  public isModalReadyToBeVisible: boolean = false;

  public constructor(public service: RequestService) { }

  /**
   * Gets the info of each github Angular user and saves it into an array.
   * @returns {void}
   */
  public getGithubAngularUserInfo(): void {
    this.service.getResponse("angular").subscribe((response) => {
      response.items.forEach(element => {
        this.githubAngularUsers.push(
          {
            avatarUrl: element.avatar_url,
            username: element.login
          }
        )
      });
    })
  }

  /**
   * Selects the github user that the user has clicked on displaying a modal window.
   * @param {IGithub} user
   * @returns {any}
   */
  public selectUser(user: IGithub): void {
    this.userSelected = user;
    this.isModalReadyToBeVisible = true;
  }

  /**
   * Handles if the modal has to be popped up or closed.
   * @param {boolean} isModalReadyToPopUp
   * @returns {void}
   */
  public handleModal(isModalReadyToPopUp: boolean): void {
    this.isModalReadyToBeVisible = isModalReadyToPopUp;
  }

  /**
   * Executes the function automatically.
   * @returns {void}
   */
  public ngOnInit(): void {
    this.getGithubAngularUserInfo()
  }
}
