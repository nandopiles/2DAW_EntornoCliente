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
 * Checks if the year has the correct format
 * @param {any} object
 * @returns {Boolean}
 */
let checkYear = (object) => {
    const pattern = /^\d{4}$/

    if (pattern.test(object.value))
        return true
    alert("Year no valid, format => {XXXX}")
    return false
}

/**
 * Checks if the category selected is valid
 * @param {any} object
 * @returns {Boolean}
 */
let checkCategory = (object) => {
    let optionSelected = object.options[object.selectedIndex]
    if (optionSelected.value !== "")
        return [true, optionSelected]
    alert("Select a valid Category")
    return [false, null]
}

/**
 * Checks the radiosInput that is selected
 * @param {Array} radios
 * @returns {id} the id of the radio
 */
let checkRadioInput = (radios) => {

    for (let radio of radios) {
        if (radio.checked)
            return radio.id
    }
}

/**
 * Checks if the Human's checkbox is checked
 * @param {any} object
 * @returns {any}
 */
let checkHumanBtn = (object) => {
    if (object.checked)
        return true
    alert("Human Verification failed")
    return false
}

let radios = [...document.querySelectorAll('input[type="radio"]')]

//all the radios must have the same "name" to be sincronice
let nameRadios = "frequency"
radios.forEach(radio => {
    if (radio.name !== nameRadios) {
        radio.name = nameRadios
    }
})

document.getElementsByTagName("form")[2].addEventListener("submit", (event) => {
    event.preventDefault()

    console.log("AAAA");
    if (checkIfIsNotInBlank(document.getElementById("nickname")))
        if (checkIfIsNotInBlank(document.getElementById("film")))
            if (checkYear(document.getElementById("year")))
                if (checkIfIsNotInBlank(document.getElementById("director")))
                    if (checkCategory(document.getElementById("category"))[0]) {
                        let frequencySelected = checkRadioInput(radios)

                        if (checkHumanBtn(document.getElementById("human")))
                            if (checkIfIsNotInBlank(document.getElementById("message")))
                                document.getElementsByTagName("p")[2].innerHTML = `
                                User: ${document.getElementById("nickname").value}<br>
                                Film: \"${document.getElementById("film").value}\", of the year: ${document.getElementById("year").value}<br>
                                Director: ${document.getElementById("director").value}<br>
                                Mark: ${checkCategory(document.getElementById("category"))[1].value}<br>
                                It sees it: ${frequencySelected.replace("-", " ")}<br>
                                Review:<br>&nbsp&nbsp&nbsp${document.getElementById("message").value}`
                    }
})