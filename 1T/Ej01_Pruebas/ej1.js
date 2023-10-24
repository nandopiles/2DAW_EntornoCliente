let age
let year

do {
    age = prompt("How old are u?")
} while (isNaN(age) || age < 0)

console.log(age)
year = new Date().getFullYear() - age
alert("U are from " + year)