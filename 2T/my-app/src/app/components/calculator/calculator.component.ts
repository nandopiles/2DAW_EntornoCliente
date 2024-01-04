import { Component } from '@angular/core';
import { CalculatorOperations } from './calculator.interface';

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

  public firstNumber: number | null = null;
  public secondNumber: number | null = null;

  public result: number = 0;
  public isPlus: boolean = false;
  public numbersToOperate: number[] = [];
  public operationsLibrary: CalculatorOperations = {
    sum: () => {
      if (this.firstNumber !== null && this.secondNumber !== null) {
        console.log("Bo");
        this.sum()
      } else if (this.firstNumber !== null && this.secondNumber === null) {
        this.secondNumber = Number(this.value);
        this.result = Number(this.firstNumber) + Number(this.secondNumber);
        this.value = this.result.toString();
      }
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
   * Sums the first num with the second one.
   * @returns {void}
   */
  public sum(): void {
    this.operationToDo = "sum";

    if (this.firstNumber === null) {
      this.firstNumber = Number(this.value);
      this.resetNum();
    } else {
      this.secondNumber = Number(this.value);
      this.result = Number(this.firstNumber) + Number(this.secondNumber);
      this.value = this.result.toString();
      this.resetNum();
      this.firstNumber = this.result;
      this.secondNumber = null;
      this.result = 0;
    }
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
   * Saves all the numbers that have to be subtracted when the user clicks th equal symbol.
   * @returns {void}
   */
  public multiplication(): void {
    this.saveNums();
    this.operationToDo = "multiplication";
  }

  /**
   * Resets all the variables that have been used for doing the operation.
   * @returns {void}
   */
  public resetOperationVariables(): void {
    this.operationToDo = "";
    this.result = 0;
    this.firstNumber = null;
    this.secondNumber = null;
  }

  /**
   * Performs the indicated operation.
   * @returns {void}
   */
  public doOperation(): void {
    this.operationsLibrary[this.operationToDo]();
    this.resetOperationVariables();
  }

  /**
   * Calculates the factorial number.
   * @returns {void}
   */
  public factorial(): void {
    console.log("factorial");

    this.operationToDo = "factorial";
    this.doOperation();
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
