/**
 * Interface for creating all the Calculator Operations needed to implement to your calculator.
 */
export interface CalculatorOperations {
    [key: string]: () => void;
}