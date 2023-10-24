//tittle 1
let row1 = document.getElementsByTagName("td")[0]
row1.style.backgroundImage = "url('./src/cafe/1.jpg')"
row1.style.width = "33%"
row1.style.height = "290px"
//tittle 2
let row2 = document.createElement("td")
row2.style.backgroundImage = "url('./src/alcohol/1.jpg')"
row2.style.width = "33%"
row2.style.height = "290px"
let tittle2 = document.createElement("h1")
tittle2.innerHTML = "Alcohol"
//tittle 3
let row3 = document.createElement("td")
row3.style.width = "33%"
row3.style.height = "290px"
row3.style.backgroundImage = "url('./src/infusiones/1.jpg')"
let tittle3 = document.createElement("h1")
tittle3.innerHTML = "Infusiones"


//first col
document.getElementsByTagName("tr")[0].insertAdjacentElement("beforeend", row2)
document.getElementsByTagName("td")[1].insertAdjacentElement("afterbegin", tittle2)
//second col
document.getElementsByTagName("tr")[0].insertAdjacentElement("beforeend", row3)
document.getElementsByTagName("td")[2].insertAdjacentElement("beforeend", tittle3)

/**
 * Removes all the elements passed by parameter
 * @param {Array} arrayCols
 * @returns {any}
 */
let removeImgs = (arrayCols) => {
    arrayCols.forEach((col) => {
        col.remove()
    })
}

/**
 * Inserts the imgs of the directory passed by parameter. (Only 5 images are inserted).
 * @param {String} directoryName
 * @returns {String} structure ready
 */
let insertImgs = (parentRow, directoryName) => {
    for (let i = 0; i < 5; i++) {
        let col = document.createElement("td");
        parentRow.appendChild(col)
        let img = document.createElement("img")
        img.src = `./src/${directoryName}/${i + 1}.jpg`
        img.id = `${directoryName}${i + 1}`
        // img.style.width = document.getElementsByTagName("table")[0].offsetWidth
        // img.style.height = document.getElementsByTagName("table")[0].offsetHeight
        img.style.width = "100%"
        img.style.height = "100%"
        col.appendChild(img)
    }
}

/**
 * Prints the img linked with the id passed by parameter in a new row under the other.
 * @param {String} imgId
 * @returns {any}
 */
let printImgSelected = (imgId) => {
    // let imgContainer = document.createElement("div")
    // document.getElementsByTagName("div")[1].insertAdjacentElement("afterend", imgContainer)
    // let img = document.createElement("img")
    // imgContainer.appendChild(img)
    // img.src = document.getElementById(imgId).src
    // img.style.width = "50%"
    // img.style.height = "50%"

    if (!isSpecificProductPrinted) {
        let row = document.createElement("tr")
        document.getElementsByTagName("tbody")[0].appendChild(row)
        let img = document.createElement("img")
        row.appendChild(img)
        img.src = document.getElementById(imgId).src
        img.style.width = "100%"
        img.style.height = "100%"
        isSpecificProductPrinted = true
    } else {
        let replacementImg = document.createElement("img")
        replacementImg.src = document.getElementById(imgId).src
        let row = document.getElementsByTagName("tr")[1]
        let imgToReplace = row.getElementsByTagName("img")[0]
        document.getElementsByTagName("tr")[1].replaceChild(replacementImg, imgToReplace)
    }
}

/**
 * Creates the listeners for the imgs of the same theme
 * @param {Array} arrayCols
 * @param {String} directoryName
 * @returns {any}
 */
let createSubImgListeners = (arrayCols, directoryName) => {
    arrayCols.forEach((col, index) => {
        col.addEventListener('click', () => {
            printImgSelected(directoryName + (index + 1))
        })
    })
}

let isSpecificProductPrinted = false

//listeners
document.getElementsByTagName("td")[0].addEventListener('click', () => {
    let tittleText = (document.getElementsByTagName('h1')[1].innerHTML).toLowerCase()
    removeImgs(Array.from(document.getElementsByTagName('td')))
    insertImgs(document.getElementsByTagName('tr')[0], tittleText)
    createSubImgListeners(Array.from(document.getElementsByTagName('td')), tittleText)
})

document.getElementsByTagName("td")[1].addEventListener('click', () => {
    let tittleText = (document.getElementsByTagName('h1')[2].innerHTML).toLowerCase()
    removeImgs(Array.from(document.getElementsByTagName('td')))
    insertImgs(document.getElementsByTagName('tr')[0], tittleText)
    createSubImgListeners(Array.from(document.getElementsByTagName('td')), tittleText)
})

document.getElementsByTagName("td")[2].addEventListener('click', () => {
    let tittleText = (document.getElementsByTagName('h1')[3].innerHTML).toLowerCase()
    removeImgs(Array.from(document.getElementsByTagName('td')))
    insertImgs(document.getElementsByTagName('tr')[0], tittleText)
    createSubImgListeners(Array.from(document.getElementsByTagName('td')), tittleText)
})