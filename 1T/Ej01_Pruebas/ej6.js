let number
let result = 1

do {
    number = prompt("Introduce a number:")
} while (isNaN(number));

for (let i = number; i > 0; i--) {
    result *= i
}

console.log("Factorial de " + number + " => " + result);