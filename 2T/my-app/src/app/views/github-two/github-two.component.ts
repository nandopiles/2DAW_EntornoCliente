import { Component } from '@angular/core';
import { RequestService } from '../../services/request.service';
import { ModalComponent } from '../../components/modal/modal.component';
import { Item } from '../../interfaces/response.interface';
import { ModalInfo } from '../../interfaces/modalInfo.interface';

@Component({
  selector: 'app-github-two',
  standalone: true,
  imports: [ModalComponent],
  templateUrl: './github-two.component.html',
  styleUrl: './github-two.component.css'
})
export class GithubTwoComponent {
  public githubAngularUsers: Item[] = [];
  public userSelected: ModalInfo = {
    name: '',
    url: ''
  }
  public isModalReadyToBeVisible: boolean = false;

  public constructor(public service: RequestService) { }

  /**
   * Selects the github user that the user has clicked on displaying a modal window.
   * @param {IGithub} user
   * @returns {any}
   */
  public selectUser(user: Item): void {
    this.userSelected = {
      name: user.login,
      url: user.avatar_url
    }
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
    this.githubAngularUsers = this.service.getGithubUserInfo("angular");
  }
}
