import { Component } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import { Meme } from '../../interfaces/required.interface';
import { RequiredService } from '../../services/required.service';

@Component({
  selector: 'app-memigo-two',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './memigo-two.component.html',
  styleUrl: './memigo-two.component.css'
})
export class MemigoTwoComponent {
  public memes: Meme[] = [];

  public constructor(public service: RequiredService) { }

  
}
