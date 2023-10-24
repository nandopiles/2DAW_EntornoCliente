let isModalVisible = false



/**
 * create the structure of the modal form
 * @returns {any}
 */
const createModalForm = () => {
    const footer = document.getElementsByTagName("footer")[0]
    const generalContainer = document.createElement("div")
    const contentContainer = document.createElement("div")
    const spanX = document.createElement("span")
    const section = document.createElement("section")
    const form = document.createElement("form")
    const firstDiv = document.createElement("div")
    const inputName = document.createElement("input")
    const inputSurname1 = document.createElement("input")
    const secondDiv = document.createElement("div")
    const inputSurname2 = document.createElement("input")
    const inputPhone = document.createElement("input")
    const submitButton = document.createElement("input")

    generalContainer.className = "modal"
    generalContainer.id = "modal"
    contentContainer.className = "modal-content"
    spanX.className = "close-button"
    spanX.textContent = "x"
    inputName.type = "text"
    inputName.placeholder = "Name"
    inputName.id = "name"
    inputName.className = "input"
    inputSurname1.type = "text"
    inputSurname1.placeholder = "First Surname"
    inputSurname1.id = "surname1"
    inputSurname1.className = "input"
    inputSurname2.type = "text"
    inputSurname2.placeholder = "Second Surname"
    inputSurname2.id = "surname2"
    inputSurname2.className = "input"
    inputPhone.type = "num"
    inputPhone.placeholder = "Phone"
    inputPhone.id = "phone"
    inputPhone.className = "input"
    submitButton.type = "submit"
    submitButton.value = "Submit"
    submitButton.id = "submit"
    submitButton.className = "send"

    footer.insertAdjacentElement("beforebegin", generalContainer)
    generalContainer.appendChild(contentContainer)
    contentContainer.appendChild(spanX)
    contentContainer.appendChild(section)
    section.appendChild(form)
    form.appendChild(firstDiv)
    firstDiv.appendChild(inputName)
    firstDiv.appendChild(inputSurname1)
    form.appendChild(secondDiv)
    secondDiv.appendChild(inputSurname2)
    secondDiv.appendChild(inputPhone)
    form.appendChild(submitButton)
}

/**
 * disable the interaction of all the elements except the modal
 * @returns {any}
 */
const disableInteraction = () => {
    const elements = document.body.children;
    const modal = document.getElementById("modal")

    for (const element of elements) {
        if (element !== modal) {
            element.style.pointerEvents = "none";
        }
    }
}

/**
 * enable the interaction of all the elements
 * @returns {any}
 */
const enableInteraction = () => {
    const elements = document.body.children;

    for (const element of elements) {
        element.style.pointerEvents = "";
    }
}

/**
 * open the modal
 * @returns {any}
*/
const openModal = () => {
    document.getElementsByClassName("modal")[0].className = "modal show-modal"
    disableInteraction()
}

/**
 * close the modal
 * @returns {any}
 */
const closeModal = () => {
    document.getElementsByClassName("modal show-modal")[0].className = "modal"
    enableInteraction()
}

/**
 * create the listener for the close button of the modal
 * @returns {any}
 */
const createListenerCloseBtn = () => {
    document.getElementsByClassName("close-button")[0].addEventListener("click", () => {
        closeModal()
        isModalVisible = false
    })
}

/**
 * Checks if the name and the first and second surname have the correct format
 * @param {any} name
 * @param {any} surname1
 * @param {any} surname2
 * @returns {any}
 */
const checkName = (name, surname1, surname2) => {
    const pattern = /^[a-zA-Z]+$/

    if (pattern.test(name)) {
        if (pattern.test(surname1)) {
            if (pattern.test(surname2))
                return true
            else {
                document.getElementById("surname2").value = ""
                alert("Smth has gone wrong in Surname 2")
            }
        } else {
            document.getElementById("surname1").value = ""
            alert("Smth has gone wrong in Surname 1")
        }
    } else {
        document.getElementById("name").value = ""
        alert("Smth has gone wrong in Name")
    }

    return false
}

/**
 * Checks if the year has the correct format
 * @param {any} object
 * @returns {Boolean}
 */
const checkPhone = (phone) => {
    const pattern = /^[6-9]\d{8}$/

    if (pattern.test(phone))
        return true
    alert("Phone no valid, format => {XXX XXX XXX}\nMust begin with [6,7,8,9]")
    return false
}

/**
 ** create the listener for the submit button of the form
 * @returns {any}
 */
const createListenerSubmitBtn = () => {
    document.getElementsByTagName("form")[0].addEventListener("submit", (event) => { //must have the reference to the form!!
        event.preventDefault()

        if (checkName(
            document.getElementById("name").value,
            document.getElementById("surname1").value,
            document.getElementById("surname2").value)
            && checkPhone(document.getElementById("phone").value)
        )
            closeModal()
    })
}



//create the footer
const footer = document.createElement("footer")
footer.classList.add("header")
document.getElementsByTagName("script")[0].insertAdjacentElement("beforebegin", footer)

const h1 = document.createElement("h1")
h1.innerHTML = "Contacto"
footer.appendChild(h1)

createModalForm()

/**
 * show the modal form
 * @param {any} "footer"
 * @returns {any}
 */
document.getElementsByTagName("footer")[0].addEventListener("click", () => {
    if (!isModalVisible) {
        openModal()
        createListenerCloseBtn()
        createListenerSubmitBtn()
        isModalVisible = true
    }
})