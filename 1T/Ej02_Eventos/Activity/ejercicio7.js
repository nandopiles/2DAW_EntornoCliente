/**
 * Changes the opacity of the img
 * @param {any} position => img in the array
 * @param {any} event
 * @returns {any}
 */
let confOpacity = (position, event) => {
    if (event.type === 'mouseover') {
        document.getElementsByTagName("img")[position].style.opacity = 0.5
    } else {
        document.getElementsByTagName("img")[position].style.opacity = 1
    }
}

//creates the listeners of the imgs
for (let i = 1; i < document.getElementsByTagName("img").length; i++) {
    document.getElementsByTagName("img")[i].addEventListener('mouseover', (event) => confOpacity(i, event))
    document.getElementsByTagName("img")[i].addEventListener('mouseout', (event) => confOpacity(i, event))
}

//array key=>value
let nameSandwiches = {
    "Chivito": 'https://es.wikipedia.org/wiki/Chivito',
    "Blanco y negro": 'https://es.wikipedia.org/wiki/Blanco_y_negro_(bocadillo)',
    "Brascada": 'https://ca.wikipedia.org/wiki/Brascada',
    "Almussafes": 'https://es.wikipedia.org/wiki/Almusafes_(bocadillo)',
    "Tortilla de patatas": 'https://es.wikipedia.org/wiki/Tortilla_de_patatas',
    "Calamares en alioli": 'https://es.wikipedia.org/wiki/Bocadillo_de_calamares'
}

//open modal window (changing the class)
Object.keys(nameSandwiches).forEach((key, i) => {
    console.log(i + " : " + key + " => " + nameSandwiches[key]);

    document.getElementsByTagName("img")[i + 1].addEventListener('click', () => {
        document.getElementsByClassName("modal")[0].className = "show-modal"
        document.getElementsByTagName("h1")[1].innerHTML = `<a href=\"${nameSandwiches[key]}\">${key}</a>`
    })
});

//close modal window
document.getElementsByTagName("span")[0].addEventListener('click', () => {
    document.getElementsByClassName("show-modal")[0].className = "modal"
})