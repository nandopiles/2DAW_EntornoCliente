//* The array "names" and the position is in the file => "ejercicio8.js"

const defaultValue = document.getElementsByTagName("h2")[0].innerHTML //default value of the "h2"

/**
 * Modifies the "alt" img selected showing the title of the desert
 * @param {any} "img"
 * @returns {any}
 */
document.getElementsByTagName("img")[1].addEventListener("mousedown", () => {
    document.getElementsByTagName("h2")[0].innerHTML = desertNames[position].slice(0, -4) //cuts the extension
})

/**
 * Modifies the "alt" img to anything
 * @param {any} "img"
 * @returns {any}
 */
document.getElementsByTagName("img")[1].addEventListener("mouseup", () => {
    document.getElementsByTagName("h2")[0].innerHTML = defaultValue
})