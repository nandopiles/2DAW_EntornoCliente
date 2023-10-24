const desertNames = [
    'Flan con huevo.jpg',
    'Flan con nata.jpg',
    'Tarta de manzana.jpg',
    'Tarta de queso.jpg',
    'Tarta de zanahoria.jpg',
    'Tiramisu.jpg'
]

position = 0
document.getElementsByTagName("img")[1].src = `./src/postres/${desertNames[position]}`

/**
 * When u click on the "next" button, the next img of the list will be showed
 * @param {any} siguiente => button
 * @returns {any}
 */
document.getElementById("siguiente").addEventListener('click', () => {
    if (position == desertNames.length - 1)
        position = 0
    else
        position++
    document.getElementsByTagName("img")[1].src = `./src/postres/${desertNames[position]}`
})

/**
 * When u click on the "previous" button, the previous img of the list will be showed
 * @param {any} anterior => button
 * @returns {any}
 */
document.getElementById("anterior").addEventListener('click', () => {
    if (position == 0)
        position = desertNames.length - 1
    else
        position--
    document.getElementsByTagName("img")[1].src = `./src/postres/${desertNames[position]}`
})