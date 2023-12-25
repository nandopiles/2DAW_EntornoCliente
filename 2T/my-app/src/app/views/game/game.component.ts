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
  public colorsLevel1: string[] = ["red", "yellow", "green", "purple"];
  public colorsLevel2: string[] = ["red", "yellow", "green", "purple", "blue", "violet", "orange", "grey", "black"];
  public colorsLevel3: string[] = ["red", "yellow", "green", "purple", "blue", "violet", "orange", "grey", "black", "silver", "fuchsia", "lime", "navy", "aqua", "chartreuse", "cornflowerblue"];
  public currentColorCombination: string[] = [];
  public winnerCombination: string[] = [];
  public defaultColor: string = "#2176FF";
  public timeShuffling: number = 3000;
  public timesFailed: number = 0;
  public numCols: number = 0;
  public selectedCellIndex: number | null = null;
  public intervalId: any;
  public isGameOver: boolean = false;
  public isWon: boolean = false;
  public isLevel1: boolean = true;
  public isLevel2: boolean = false;
  public isLevel3: boolean = false;



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
    let generatedCombination: string[] = [];

    if (this.isLevel1) {
      generatedCombination = [...this.colorsLevel1]; // creates a copy of the colors array to not changing it the original one.
    } else if (this.isLevel2) {
      generatedCombination = [...this.colorsLevel2];
    } else if (this.isLevel3) {
      generatedCombination = [...this.colorsLevel3];
    }

    // Fisher-Yates algorithm to shuffle
    for (let i = generatedCombination.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [generatedCombination[i], generatedCombination[j]] = [generatedCombination[j], generatedCombination[i]];
    }

    if (isWinnerCombination) {
      this.currentColorCombination = generatedCombination;
      this.winnerCombination = generatedCombination;
    } else {
      this.currentColorCombination = generatedCombination;
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
      if (isWinnerCombination) console.log(this.winnerCombination);
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
      [this.currentColorCombination[this.selectedCellIndex], this.currentColorCombination[index]] = [
        this.currentColorCombination[index],
        this.currentColorCombination[this.selectedCellIndex],
      ];
      this.selectedCellIndex = null; // another time to null to reset the index of the cell clicked.
    }
  }

  /**
   * Starts to shuffle the colors and generates a winner combination and a random one to start playing.
   * @returns {void}
   */
  public startGame(): void {
    this.numCols = this.isLevel1 ? 2 : (this.isLevel2 ? 3 : (this.isLevel3 ? 4 : 0)); // depending of the level there will be more rows/columns.
    this.generateCombination(true);

    setTimeout(() => {
      this.generateCombination(false);
    }, this.timeShuffling + 2000);
  }

  /**
   * Checks if the user combination is the same as the winner combination.
   * @returns {void}
   */
  public checkResult(): void {
    if (JSON.stringify(this.winnerCombination) !== JSON.stringify(this.currentColorCombination)) { // converts the array into a JSON and then compares with the other one.
      alert("Yee t'has equivocat!!, torna a intentar-ho");
      this.timesFailed++;

      if (this.timesFailed >= 3)
        this.isGameOver = true;
    } else {
      // correct combination.
      console.log("hell yeah!");
      if (this.isLevel1) {
        this.isLevel1 = false;
        this.isLevel2 = true;
        this.startGame();
      } else if (this.isLevel2) {
        this.isLevel2 = false;
        this.isLevel3 = true;
        this.startGame();
      } else if (this.isLevel3) {
        this.isLevel3 = false;
        this.isWon = true;
      }
    }
  }
}
