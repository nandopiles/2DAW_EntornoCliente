let number

/**
 ** Creates an Array with the Fibonacci's sequence since the position passed by parameter
 * @param {Number} position position where the sequence has to stop
 * @returns {Array} Fibonacci's sequence
 */
fibonacciSequence = (position) => {
    let sequence = [1, 1]
    for (let i = 2; i < position; i++) {
        let nextResults = sequence[i - 1] + sequence[i - 2]
        sequence.push(nextResults)
    }
    return sequence
}

number = prompt("Enter a position:")
let sequence = fibonacciSequence(number)
console.log(sequence);
alert(`Result => ${sequence[parseInt(number - 1)]}`)