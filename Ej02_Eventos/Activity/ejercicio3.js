/**
 * Does the action of changing the text
 * @param {any} event
 */
let cambiarTexto = (event) => {
    if (event.type === "mouseover") {
        return "⚡Bar McQueen⚡"
    } else {
        return "Casa Pepe"
    }
}

//"hover"
document.getElementsByTagName("h1")[0].addEventListener("mouseover", (event) => {
    document.getElementsByTagName("h1")[0].innerHTML = cambiarTexto(event)
})
document.getElementsByTagName("h1")[0].addEventListener("mouseout", (event) => {
    document.getElementsByTagName("h1")[0].innerHTML = cambiarTexto(event)
})
