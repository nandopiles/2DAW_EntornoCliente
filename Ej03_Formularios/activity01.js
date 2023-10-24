/**
 * Checks if the name and the first and second surname have the correct format
 * @param {any} name
 * @param {any} surname1
 * @param {any} surname2
 * @returns {any}
 */
let checkName = (name, surname1, surname2) => {
    const pattern = /^[a-zA-Z]+$/

    if (pattern.test(name)) {
        if (pattern.test(surname1)) {
            if (pattern.test(surname2)) {
                return true
            } else
                alert("Only Characters in Surname 2")
        } else
            alert("Only Characters in Surname 1")
    } else
        alert("Only Characters in Name")

    return false
}

/**
 * Checks if the dni passed by parameter has the correct format
 * @param {any} dni
 * @returns {any}
 */
let checkDni = (dni) => {
    const pattern = /^\d{8}$/

    if (pattern.test(dni))
        return true
    else {
        alert("DNI incorrect format")
        return false
    }
}

const lettersDni = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E"]

document.getElementsByTagName("form")[0].addEventListener("submit", (event) => {
    event.preventDefault()

    if (!checkName(
        document.getElementsByName("name")[0].value,
        document.getElementsByName("first-surname")[0].value,
        document.getElementsByName("second-surname")[0].value)
        || !checkDni(document.getElementById("dni").value)) {
        document.getElementsByName("name")[0].value = ""
        document.getElementsByName("first-surname")[0].value = ""
        document.getElementsByName("second-surname")[0].value = ""
        document.getElementById("dni").value = ""
    } else {
        let numDni = parseInt(document.getElementById("dni").value) % 23
        alert(`Letter of Dni => ${lettersDni[numDni]}`)
    }
})