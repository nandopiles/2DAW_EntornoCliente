let firstCombination = new Set
let secondCombination = new Set


/**
 ** Creates a no repetition number list in which the min and max value of the number to be displayed is configured apart from the fact that the length of the list must be stated 
 * @param {Number} min minimum number of the sequence
 * @param {Number} max maximum number of the sequence
 * @param {Number} length length of the sequence
 * @returns {Set} list of a combination where any number is repeated
 */
let generateLimitedRandomCombination = (min, max, length) => {
    let noRepetitionCombination = new Set
    let numberToAdd = 0

    for (let i = 0; i < length; i++) {
        numberToAdd = Math.floor(Math.random() * (max - min + 1)) + min
        if (noRepetitionCombination.has(numberToAdd)) {
            i--
        } else {
            noRepetitionCombination.add(numberToAdd)
        }
    }
    return noRepetitionCombination
}

firstCombination = generateLimitedRandomCombination(1, 50, 5)
console.log(firstCombination);
secondCombination = generateLimitedRandomCombination(1, 12, 2)
console.log(secondCombination);