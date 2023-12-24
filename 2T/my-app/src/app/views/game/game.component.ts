import { NgStyle } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './game.component.html',
  styleUrl: './game.component.css'
})
export class GameComponent {
  public defaultColor: string = "#2176FF";
  public colors: string[] = ["red", "yellow", "green", "purple"];
  public combinationCreated: string[] = [];
  public intervalId: any;



  public stopShuffling(): void {
    clearInterval(this.intervalId);
  }

  public shuffleColors(): void {
    const tempColors = [...this.colors]; // creates a copy of the colors array to not changing it the original one.

    // Fisher-Yates algorithm to shuffle
    for (let i = tempColors.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [tempColors[i], tempColors[j]] = [tempColors[j], tempColors[i]];
    }

    this.combinationCreated = tempColors;
  }

  public startGame(): void {
    this.intervalId = setInterval(() => {
      this.shuffleColors();
    }, 100);

    setTimeout(() => {
      this.stopShuffling();
    }, 3000);
  }
}
