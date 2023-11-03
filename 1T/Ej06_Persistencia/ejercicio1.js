/**
 * add the info of the form in the local storage
 * @param {any} "form"
 * @returns {any}
 */
document.getElementsByTagName("form")[0].addEventListener('submit', (event) => {
    event.preventDefault()
    const insertObject = {
        name: document.getElementsByName("name")[0].value,
        surname1: document.getElementsByName("first_surname")[0].value,
        surname2: document.getElementsByName("second_surname")[0].value,
        dni: document.getElementsByName("dni")[0].value
    }

    window.localStorage.setItem(document.getElementsByName("dni")[0].value, JSON.stringify(insertObject));
})

/**
 * return the element
 * @param {any} itemToFind
 * @returns {any}
 */
const getElementItem = (itemToFind) => {
    return window.localStorage.getItem(itemToFind);
}

/**
 * print the element depending on the dni selected
 * @param {any} "button_get_data"
 * @returns {any}
 */
document.getElementsByName("button_get_data")[0].addEventListener('click', () => {
    const element = getElementItem(document.getElementsByName("get_data")[0].value)

    document.getElementsByName("get_data")[0].value = `
    Name: ${JSON.parse(element).name}\t
    First Surname: ${JSON.parse(element).surname1}\t
    Second Surname: ${JSON.parse(element).surname2}
    `
})

/**
 * remove a specific element depending on the dni selected
 * @param {any} "button_delete_item"
 * @returns {any}
 */
document.getElementsByName("button_delete_item")[0].addEventListener('click', () =>
    window.localStorage.removeItem(document.getElementsByName("delete_item")[0].value)
)

/**
 * remove all the elements
 * @param {any} "button_delete_all"
 * @returns {any}
 */
document.getElementsByName("button_delete_all")[0].addEventListener('click', () =>
    window.localStorage.clear()
)
