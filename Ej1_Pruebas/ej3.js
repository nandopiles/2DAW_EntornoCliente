let mark

do {
    mark = prompt("Insert ur mark:")
} while (isNaN(mark) || mark < 0 || mark > 10);

console.log(mark);
switch (parseInt(mark)) {
    case 0:
        alert("INSUFICIENTE")
        break;
    case 1:
        alert("INSUFICIENTE")
        break;
    case 2:
        alert("INSUFICIENTE")
        break;
    case 3:
        alert("INSUFICIENTE")
        break;
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
        alert("NOTABLE")
        break;
    case 8:
        alert("NOTABLE")
        break;
    case 9:
        alert("SOBRESALIENTE")
        break;
    case 10:
        alert("SOBRESALIENTE")
        break;
}