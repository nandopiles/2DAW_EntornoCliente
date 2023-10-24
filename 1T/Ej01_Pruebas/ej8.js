let position
let sequence

/**
 ** Creates an Array with the Fibonacci's sequence since the position passed by parameter
 * @param {Number} max position where the sequence has to stop
 * @returns {Array} Fibonacci's sequence
 */
fibonacciSequence = (max) => {
    let sequence = [1, 1]
    let nextResult

    for (let i = 2; i < max; i++) {
        nextResult = sequence[i - 1] + sequence[i - 2]
        sequence.push(nextResult)
    }
    return sequence
}

position = prompt("Enter a position:")
sequence = fibonacciSequence(position)
console.log(sequence);
alert(`Result => ${sequence[parseInt(position - 1)]}`)