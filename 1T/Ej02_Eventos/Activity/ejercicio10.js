/**
 * Depending of the position of the mouse the "h1" title becomes of one color or other
 * @param {any} x => position X of the mouse
 * @param {any} y => position Y of the mouse
 * @returns {any} => color
 */
let checkPosition = (x, y) => {
    if (x >= 0 && x <= 500 && y >= 0 && y <= 500) {
        return 'yellow';
    } else if (x >= 0 && x <= 500 && y >= 500 && y <= 1000) {
        return 'red';
    } else if (x >= 500 && x <= 1000 && y >= 0 && y <= 500) {
        return 'blue';
    } else if (x >= 500 && x <= 500 && y >= 500 && y <= 1000) {
        return 'green';
    } else {
        return 'white'; //default
    }
}

/**
 * Sends the X/Y position of the mouse and changes the "h1" color
 * @param {any} mousemove
 * @param {any} event
 * @returns {any}
 */
document.addEventListener("mousemove", (event) => {
    let x = event.clientX
    let y = event.clientY

    let color = checkPosition(x, y)
    document.getElementsByTagName("h1")[0].style.color = color;
})