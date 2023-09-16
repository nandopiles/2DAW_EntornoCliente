let mark

do {
    mark = prompt("Insert ur mark:")
} while (isNaN(mark) || mark < 0 || mark > 10);

console.log(mark);
switch (parseInt(mark)) {
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
        alert("INSUFICIENTE")
        break;
    case 5:
        alert("SUFICIENTE")
        break;
    case 6:
        alert("BIEN")
        break;
    case 7:
    case 8:
        alert("NOTABLE")
        break;
    case 9:
    case 10:
        alert("SOBRESALIENTE")
        break;
}