let side1
let side2

do {
    side1 = prompt("First side")
    side2 = prompt("Second side")
    if (isNaN(side1) || isNaN(side2) || side1 == "" || side2 == "") {
        alert("No es un número, repita!")
    }
} while (isNaN(side1) || isNaN(side2) || side1 == "" || side2 == "");


if (side1 == side2) {
    console.log("Son iguales");
} else {
    console.log("Diferentes");
}
console.log("Área => " + (side1 * side2))
console.log("Perímetro => " + (side1 * 2 + side2 * 2))