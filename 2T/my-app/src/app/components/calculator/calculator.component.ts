import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css'
})
export class CalculatorComponent {
  public value: string = "0";
  public operationToDo: string = "";
  public firstNumber: number = 0;
  public result: number = 0;
  public isPlus: boolean = false;
  public numbersToOperate: number[] = [];
  public OPERATIONS: { [key: string]: () => void } = {
    sum: () => {
      this.numbersToOperate.forEach(num => {
        this.result += num;
      });
      this.result += Number(this.value);
      this.value = this.result.toString();
    },
    subtract: () => {
      if (this.numbersToOperate.length === 1) {
        this.result = this.numbersToOperate[0]; 
      } else if (this.numbersToOperate.length > 1) {
        this.result = this.numbersToOperate.reduce((accumulator, num) => accumulator - num);
      }
      this.result -= Number(this.value);
      this.value = this.result.toString();
    },
    multiplication: () => {
      this.numbersToOperate.forEach(num => {
        this.result *= num;
      });
      this.result *= Number(this.value);
      this.value = this.result.toString();
    }
  };



  /**
   * Gets the value of the num clicked.
   * @param {number|string} num
   * @returns {void}
   */
  public getNum(num: number | string): void {
    const numString: string = num.toString();
    (this.value === "0") ? this.value = numString : this.value += numString;
  }

  /**
   * Resets the number wrote into an empty string to write another number.
   * @returns {void}
   */
  public resetNum(): void {
    this.value = "";
  }

  /**
   * Saves the value of the num wrote into a list of numbers.
   * @returns {void}
   */
  public saveNums(): void {
    this.numbersToOperate.push(Number(this.value));
    this.resetNum();
  }

  /**
   * Saves all the numbers that have to be plus when the user clicks th equal symbol.
   * @returns {void}
   */
  public sum(): void {
    this.saveNums();
    this.operationToDo = "sum";
  }

  /**
   * Saves all the numbers that have to be subtracted when the user clicks th equal symbol.
   * @returns {void}
   */
  public subtract(): void {
    this.saveNums();
    this.operationToDo = "subtract";
  }

  /**
   * Resets all the variables that have been used for doing the operation.
   * @returns {void}
   */
  public resetOperationVariables(): void {
    this.numbersToOperate = [];
    this.operationToDo = "";
    this.result = 0;
  }

  /**
   * Performs the indicated operation.
   * @returns {void}
   */
  public doOperation(): void {
    this.OPERATIONS[this.operationToDo]();
    this.resetOperationVariables();
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
