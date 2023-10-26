/**
 * add the info of the form in the local storage
 * @param {any} "form"
 * @returns {any}
 */
document.getElementsByTagName("form")[1].addEventListener('submit', () => {
    const insertObject = {
        name: document.getElementsByName("name")[1].value,
        surname1: document.getElementsByName("first_surname")[1].value,
        surname2: document.getElementsByName("second_surname")[1].value,
        dni: document.getElementsByName("dni")[1].value,
        colorText: document.getElementById("color").options[]
    }

    window.localStorage.setItem(document.getElementsByName("dni")[1].value, JSON.stringify(insertObject));
})