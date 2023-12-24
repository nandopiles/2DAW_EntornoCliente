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
  public colors: string[] = ["red", "yellow", "green", "purple"];
  public colorCombination: string[] = [];
  public winnerCombination: string[] = [];
  public shuffledCombination: string[] = [];
  public defaultColor: string = "#2176FF";
  public timeShuffling: number = 3000;
  public timesFailed: number = 0;
  public selectedCellIndex: number | null = null;
  public intervalId: any;
  public isContinuePlaying: boolean = true;



  /**
   * Stops to shuffle the colors.
   * @returns {void}
   */
  public stopShuffling(): void {
    clearInterval(this.intervalId);
  }

  /**
   * Shuffles the colors.
   * @returns {void}
   */
  public shuffleColors(isWinnerCombination: boolean): void {
    const generatedCombination = [...this.colors]; // creates a copy of the colors array to not changing it the original one.

    // Fisher-Yates algorithm to shuffle
    for (let i = generatedCombination.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [generatedCombination[i], generatedCombination[j]] = [generatedCombination[j], generatedCombination[i]];
    }

    if (isWinnerCombination) {
      this.colorCombination = generatedCombination;
      this.winnerCombination = generatedCombination;
    } else {
      this.colorCombination = generatedCombination;
      this.shuffledCombination = generatedCombination;
    }
  }

  /**
   * Generates the combination that u have to memorize to win the game.
   * @returns {void}
   */
  public generateCombination(isWinnerCombination: boolean): void {
    this.intervalId = setInterval(() => {
      this.shuffleColors(isWinnerCombination);
    }, 100);

    setTimeout(() => {
      this.stopShuffling();
      (isWinnerCombination) ? console.log(this.winnerCombination) : console.log(this.shuffledCombination);
    }, this.timeShuffling);
  }

  /**
   * Swaps the color with other square.
   * 
   * First u have to click to any square and when u click to another one they will swap the colors.
   * @param {number} index of the square to swap.
   * @returns {void}
   */
  public changeColorCell(index: number): void {
    if (this.selectedCellIndex === null)
      this.selectedCellIndex = index; // no cell is selected yet
    else {
      // swap colors
      [this.colorCombination[this.selectedCellIndex], this.colorCombination[index]] = [
        this.colorCombination[index],
        this.colorCombination[this.selectedCellIndex],
      ];
      this.selectedCellIndex = null; // another time to null to reset the index of the cell clicked.
    }
  }

  /**
   * Checks if the user combination is the same as the winner combination.
   * @returns {any}
   */
  public checkResult(): void {
    if (this.timesFailed >= 3) {
      this.isContinuePlaying = false;
    }
  }

  /**
   * Starts to shuffle the colors ......
   * @returns {void}
   */
  public startGame(): void {
    this.generateCombination(true);

    setTimeout(() => {
      this.generateCombination(false);
    }, this.timeShuffling + 2000);
  }
}
