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
            } else {
                document.getElementsByName("second-surname")[1].value = ""
                alert("Only Characters in Surname 2")
            }
        } else {
            document.getElementsByName("first-surname")[1].value = ""
            alert("Only Characters in Surname 1")
        }
    } else {
        document.getElementsByName("name")[1].value = ""
        alert("Only Characters in Name")
    }

    return false
}

/**
 * Checks if the email has the correct format
 * @param {any} email
 * @returns {any}
 */
let checkEmail = (email) => {
    const pattern = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/

    if (pattern.test(email))
        return true
    else {
        document.getElementById("email").value = ""
        alert("Incorrect email format")
        return false
    }
}

document.getElementsByTagName("form")[1].addEventListener("submit", (event) => {
    event.preventDefault()

    if (checkName(
        document.getElementsByName("name")[1].value,
        document.getElementsByName("first-surname")[1].value,
        document.getElementsByName("second-surname")[1].value)
        &&
        checkEmail(document.getElementById("email").value)) {
        alert("ALL RIGHT")
    }
})