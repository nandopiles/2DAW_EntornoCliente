/**
 * add the info of the form in the local storage
 * @param {any} "form"
 * @returns {any}
 */
document.getElementsByTagName("form")[1].addEventListener('submit', (event) => {
    event.preventDefault()
    const insertObject = {
        name: document.getElementsByName("name")[1].value,
        surname1: document.getElementsByName("first_surname")[1].value,
        surname2: document.getElementsByName("second_surname")[1].value,
        dni: document.getElementsByName("dni")[1].value,
        colorText: document.getElementById("color").options[document.getElementById("color").selectedIndex].text
    }

    window.localStorage.setItem(document.getElementsByName("dni")[1].value, JSON.stringify(insertObject));
})

/**
 * print the element depending on the dni selected
 * @param {any} "button_get_data"
 * @returns {any}
 */
document.getElementsByName("button_get_data")[1].addEventListener('click', () => {
    const elementHTML = document.getElementsByName("get_data")[1]
    const element = getElementItem(elementHTML.value)

    elementHTML.value = `
    Name: ${JSON.parse(element).name}\t
    First Surname: ${JSON.parse(element).surname1}\t
    Second Surname: ${JSON.parse(element).surname2}
    `
    elementHTML.style.color = JSON.parse(element).colorText
})

/**
 * remove a specific element depending on the dni selected
 * @param {any} "button_delete_item"
 * @returns {any}
 */
document.getElementsByName("button_delete_item")[1].addEventListener('click', () =>
    window.localStorage.removeItem(document.getElementsByName("delete_item")[1].value)
)

/**
 * remove all the elements
 * @param {any} "button_delete_all"
 * @returns {any}
 */
document.getElementsByName("button_delete_all")[1].addEventListener('click', () =>
    window.localStorage.clear()
)