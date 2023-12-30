import { Component } from '@angular/core';
import { publishReplay } from 'rxjs';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css'
})
export class CalculatorComponent {
  public value: string = "0";
  public firstNumber: number = 0;
  public secondNumber: number = 0;
  public isPlus: boolean = false;
  public numbersToPlus: number[] = [];

  // public numbersToOperate: number[] = [];



  /**
   * Gets the value of the num clicked.
   * @param {number} num
   * @returns {void}
   */
  public getNum(num: number | string): void {
    const numString: string = num.toString();
    (this.value === "0") ? this.value = numString : this.value += numString;
  }

  /**
   * Saves the value of the num wrote into a list of numbers.
   * @returns {void}
   */
  public saveNums(): void {
    this.numbersToPlus.push(Number(this.value));
  }

  /**
   * Saves all the numbers that have to be plus when the user clicks th equal symbol.
   * @returns {void}
   */
  public sum(): void {
    this.saveNums();
    this.resetNum();
    this.isPlus = true;
  }

  /**
   * Resets all the variables that have been used for doing the operation.
   * @returns {void}
   */
  public resetOperationVariables(): void {
    this.isPlus = false;
    this.numbersToPlus = [];
  }

  /**
   * Performs the indicated operation.
   * @returns {void}
   */
  public doOperation(): void {
    if (this.isPlus) {
      let plusResult: number = 0;

      this.numbersToPlus.forEach(num => {
        plusResult += num;
      });
      plusResult += Number(this.value);
      this.value = plusResult.toString();
      this.resetOperationVariables();
    } else {

    }
  }

  /**
   * Resets the number wrote into an empty string to write another number.
   * @returns {void}
   */
  public resetNum(): void {
    this.value = "";
  }

  /**
   * Deletes all the values and operations that were occurring.
   * @returns {void}
   */
  public deleteAll(): void {
    this.value = "0";
    this.resetOperationVariables();
  }
}
