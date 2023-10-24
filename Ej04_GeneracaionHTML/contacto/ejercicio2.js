//creates the section where the form will be displayed
let section = document.createElement("section")
document.getElementsByTagName("div")[0].insertAdjacentElement("afterend", section)
//creates the form inside the section
let form = document.createElement("form")
form.id = "form"
document.getElementsByTagName("section")[0].appendChild(form)
let div = document.createElement("div")
div.id = "container"
document.getElementById("form").appendChild(div)



/**
 * creates an input with the conf given by parameter inside a div
 * @param {String} type
 * @param {String} id
 * @param {String} placeHolder
 * @param {Number} index
 * @returns {any}
 */
let createElementForm = (type, id, placeHolder, index) => {
    let div = document.createElement("div")
    document.getElementById("container").appendChild(div)
    let input = document.createElement("input")
    input.type = type
    input.id = id
    input.placeholder = placeHolder
    input.classList.add("input")
    document.getElementsByTagName("div")[index + 2].appendChild(input)
}

const placeHoldersList = ["Name", "First Surname", "Second Surname", "DNI"]
const CASES = {
    "Name": (placeHolder, index) =>
        createElementForm("text", "name", placeHolder, index)
    ,
    "First Surname": (placeHolder, index) =>
        createElementForm("text", "first-surname", placeHolder, index)
    ,
    "Second Surname": (placeHolder, index) =>
        createElementForm("text", "second-surname", placeHolder, index)
    ,
    "DNI": (placeHolder, index) =>
        createElementForm("text", "dni", placeHolder, index)
}

//iterate each placeHolder
placeHoldersList.forEach((placeHolderValue, index) => {
    CASES[placeHolderValue](placeHolderValue, index)
})

/**
 * Checks if the object is in Blank
 * @param {any} object
 * @returns {Boolean}
 */
let checkIfIsNotInBlank = (object) => {
    if (object.value !== "")
        return true;
    alert("Camps in Blank")
    return false;
}

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
                document.getElementById("second-surname").value = ""
                alert("Only Characters in Surname 2")
            }
        } else {
            document.getElementById("first-surname").value = ""
            alert("Only Characters in Surname 1")
        }
    } else {
        document.getElementById("name").value = ""
        alert("Only Characters in Name")
    }

    return false
}

const lettersDni = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E"]

/**
 * Checks if the letter passed by parameter it's correct with the dni.
 * @param {any} letter
 * @returns {any}
 */
let checkLetterDni = (numDni, letter) => {
    let correctNumDni = parseInt(numDni) % 23
    if (lettersDni[correctNumDni] === letter)
        return true

    return false
}

/**
 * Checks if the dni passed by parameter has the correct format
 * @param {any} dni
 * @returns {any}
 */
let checkDniFormat = (dni) => {
    const pattern = /^\d{8}[A-Z]$/

    if (pattern.test(dni)) {
        if (checkLetterDni(dni.substring(0, dni.length - 1), dni[dni.length - 1]))
            return true
    }
    alert("DNI incorrect format")
    return false
}

//creates the submit button
let btn = document.createElement("button")
btn.textContent = "Submit"
btn.classList.add("send")
document.getElementById("container").appendChild(btn)

document.getElementById("form").addEventListener("submit", (event) => {
    event.preventDefault()

    if (checkIfIsNotInBlank(document.getElementById("name"),
        document.getElementById("first-surname"),
        document.getElementById("second-surname"),
        document.getElementById("DNI")))
        if (checkName(document.getElementById("name").value,
            document.getElementById("first-surname").value,
            document.getElementById("second-surname").value))
            if (checkDniFormat(document.getElementById("dni").value))
                alert("ALL CORRECT")
})