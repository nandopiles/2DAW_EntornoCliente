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
  public isOperationOnCourse: boolean = false;
  // public operationNumbers: number[] = [];



  /**
   * Gets the value of the num clicked.
   * @param {number} num
   * @returns {void}
   */
  public getNum(num: number): void {
    const numString: string = num.toString();
    (this.value === "0") ? this.value = numString : this.value += numString;
  }

  /**
   * Does the "plus" operation with the nums selected.
   * @returns {void}
   */
  public plus(): void {

    let numbersToPlus: number[] = [];

    // numbersToPlus = this.getValues(numbersToPlus);
    console.log(numbersToPlus);

  }

  /**
   * Resets the number wrote into 0 to write another number.
   * @returns {void}
   */
  public resetNum(): void {
    this.value = "0";
  }

  /**
   * Deletes all the values and operations that were occurring.
   * @returns {void}
   */
  public deleteAll(): void {
    this.value = "0";
  }
}
