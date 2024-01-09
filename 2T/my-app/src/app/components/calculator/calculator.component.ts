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

  public operationsLibrary: CalculatorOperations = {
    sum: () => {
      if (this.firstNumber !== null && this.secondNumber !== null) {
        this.performOperation(this.operationToDo);
      } else if (this.firstNumber !== null && this.secondNumber === null) {
        this.secondNumber = Number(this.value);
        this.result = Number(this.firstNumber) + Number(this.secondNumber);
        this.value = this.result.toString();
      }
    },
    subtract: () => {
      if (this.firstNumber !== null && this.secondNumber !== null) {
        this.performOperation(this.operationToDo);
      } else if (this.firstNumber !== null && this.secondNumber === null) {
        this.secondNumber = Number(this.value);
        this.result = Number(this.firstNumber) - Number(this.secondNumber);
        this.value = this.result.toString();
      }
    },
    multiplication: () => {
      if (this.firstNumber !== null && this.secondNumber !== null) {
        this.performOperation(this.operationToDo);
      } else if (this.firstNumber !== null && this.secondNumber === null) {
        this.secondNumber = Number(this.value);
        this.result = Number(this.firstNumber) * Number(this.secondNumber);
        this.value = this.result.toString();
      }
    },
    factorial: () => {
      const num = Number(this.value);

      this.result = 1; // result default value is 0 so it has to be changed to 1 bc if u multiplicate whatever by 0 it's 0.
      for (let i = num; i >= 1; i--) {
        this.result *= i;
      }
      this.value = this.result.toString();
    },
    square: () => {
      const num = Number(this.value);
      const result: number = Math.sqrt(num);

      this.value = result.toString();
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
   * Performs the specified operation using the current numbers and updates the result.
   * @param {string} operator - The operation to perform ("sum" or "subtract").
   * @returns {void}
   */
  public performOperation(operator: string): void {
    this.operationToDo = operator;

    if (this.firstNumber === null) {
      this.firstNumber = Number(this.value);
      this.resetNum();
    } else {
      this.secondNumber = Number(this.value);
      if (operator === "sum") {
        this.result = Number(this.firstNumber) + Number(this.secondNumber);
      } else if (operator === "subtract") {
        this.result = Number(this.firstNumber) - Number(this.secondNumber);
      } else if (operator === "multiplication") {
        this.result = Number(this.firstNumber) * Number(this.secondNumber);
      }
      this.result = Math.round(this.result * 100) / 100; // rounds to 2 decimals if there are.

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
  public multiplication(): void {
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
    this.operationToDo = "factorial";
    this.doOperation();
  }

  /**
   * Calculates de square root of a number.
   * @returns {void}
   */
  public square(): void {
    this.operationToDo = "square";
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
