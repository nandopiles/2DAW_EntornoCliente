import { Component } from '@angular/core';
import { ModalComponent } from '../../components/modal/modal.component';
import { Meme } from '../../interfaces/required.interface';
import { RequiredService } from '../../services/required.service';
import { PostComponent } from '../../components/post/post.component';
import { ModalInfo } from '../../interfaces/modalInfo.interface';

@Component({
  selector: 'app-memigo-three',
  standalone: true,
  imports: [PostComponent, ModalComponent],
  templateUrl: './memigo-three.component.html',
  styleUrl: './memigo-three.component.css'
})
export class MemigoThreeComponent {
  public memes: Meme[] = [];
  public currentIndex: number = 0;
  public isModalReadyToPopUp: boolean = false;
  public memeSelected: ModalInfo = {
    name: '',
    url: ''
  }

  public constructor(public service: RequiredService) { }

  /**
   * Retrieves the info of the Meme clicked.
   * @param {Meme} info
   * @returns {any}
   */
  public retrieveInfoMeme(info: Meme): void {
    this.memeSelected = {
      name: info.name,
      url: info.url
    }
  }

  /**
   * Displays the modal with the info selected.
   * @param {Meme} info
   * @returns {void}
   */
  public showModal(info: Meme): void {
    this.retrieveInfoMeme(info);
    this.isModalReadyToPopUp = true;
  }

  /**
   * Closes the modal window.
   * @returns {void}
   */
  public closeModal(): void {
    this.isModalReadyToPopUp = false;
  }

  /**
   * Goes to the next position of the carrousel.
   * @returns {void}
   */
  public nextPosition(): void {
    this.currentIndex = (this.currentIndex + 1) % this.memes.length;
  }

  /**
   * Goes to the previous position of the carrousel.
   * @returns {void}
   */
  public prevPosition(): void {
    this.currentIndex = (this.currentIndex - 1 + this.memes.length) % this.memes.length;
  }

  /**
   * Executes the function automatically.
   * @returns {void}
   */
  public ngOnInit(): void {
    this.memes = this.service.getMemes();
  }
}
