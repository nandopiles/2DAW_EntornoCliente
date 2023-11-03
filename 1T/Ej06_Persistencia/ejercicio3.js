/**
 * add the info of the form in the local storage
 * @param {any} "form"
 * @returns {any}
 */
document.getElementsByTagName("form")[2].addEventListener('submit', (event) => {
    event.preventDefault()
    const insertObject = {
        name: document.getElementsByName("monument")[0].value,
        country: document.getElementsByName("country")[0].value,
        photoUrl: document.getElementsByName("photo")[0].value
    }

    window.localStorage.setItem(document.getElementsByName("monument")[0].value, JSON.stringify(insertObject));
})

/**
 * print the element depending on the monument name selected, also change the img
 * @param {any} "button_get_data"
 * @returns {any}
 */
document.getElementsByName("button_get_data")[2].addEventListener('click', () => {
    const elementHTML = document.getElementsByName("get_data")[2]
    const element = getElementItem(elementHTML.value)

    document.getElementById("image").src = JSON.parse(element).photoUrl
    document.getElementById("image").style.width = "80%"
    document.getElementById("image").style.height = "50%"
    elementHTML.value = `
    Monument: ${JSON.parse(element).name}\t
    Country: ${JSON.parse(element).country}
    `
})

/**
 * remove a specific element depending on the monument name selected
 * @param {any} "button_delete_item"
 * @returns {any}
 */
document.getElementsByName("button_delete_item")[2].addEventListener('click', () => {
    console.log(document.getElementsByName("get_data")[2].value);
    window.localStorage.removeItem(document.getElementsByName("get_data")[2].value)

})

/**
 * remove all the elements
 * @param {any} "button_delete_all"
 * @returns {any}
 */
document.getElementsByName("button_delete_all")[2].addEventListener('click', () =>
    window.localStorage.clear()
)