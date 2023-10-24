const themes = {
    bebidas: ["cafe", "infusiones", "alcohol"],
    postres: ["tartas", "fruta"],
    entrantes: ["entrantes"]
}
const keys = Object.keys(themes);
const trContainer = document.getElementsByTagName("tr")[1]
let currentThemeIndex = 0



/**
 * calc the % of width depending on the number of imgs
 * @param {any} length
 * @returns {any}
 */
const calcWidthImgs = (length) => {
    return 100 / length
}

/**
 * delete all the elements inside the 3rd <td>
 * @returns {any}
 */
const deleteImgs = () => {
    const secondTr = document.querySelector('tr:nth-child(2)') //get all elements inside the 2nd <tr>u

    //remove all inside the 3rd <td>
    while (secondTr.firstChild) {
        secondTr.removeChild(secondTr.firstChild);
    }
}

/**
 * when the user click on the img it will be displayed all the imgs of the topic selected
 * @param {any} img
 * @param {any} article
 * @returns {any}
 */
const returnToSelectionImgs = (img, article) => {
    img.addEventListener("click", () => {
        deleteImgs()
        displaySelectedTopicImgs(article)
    })
}

/**
 * when u click in a specific topic img that img will be displayed bigger
 * @param {any} img
 * @returns {any}
 */
const displaySelectedImg = (img, article) => {
    const imgSrc = img.src

    img.addEventListener("click", () => {
        const divElement = document.createElement("div");
        const imgElement = document.createElement("img");

        deleteImgs()
        trContainer.appendChild(divElement);
        imgElement.src = imgSrc
        divElement.appendChild(imgElement);
        returnToSelectionImgs(imgElement, article)
    })
}

/**
 * display all the images of the topic selected
 * @param {any} article
 * @returns {any}
 */
const displaySelectedTopicImgs = (article) => {
    const exactWidthImgs = calcWidthImgs(5)
    const tdElement = document.createElement("td");

    for (let i = 1; i <= 5; i++) {
        const imgSrc = `src/${article}/${i}.jpg`
        const imgElement = document.createElement("img");

        imgElement.style.width = `${exactWidthImgs}%`
        imgElement.style.height = "150px"
        imgElement.src = imgSrc
        tdElement.appendChild(imgElement)
        trContainer.appendChild(tdElement);

        displaySelectedImg(imgElement, article)
    }
}

/**
 * create the listeners for each topic of the current theme
 * @param {any} object
 * @param {any} article
 * @returns {any}
 */
const createSelectedTopicImgsListeners = (object, article) => {
    object.addEventListener("click", () => {
        deleteImgs()
        displaySelectedTopicImgs(article)
    })
}

/**
 * display all the images of the current theme
 * @param {any} themeKey
 * @returns {any}
 */
const displayImgsOfCurrentTheme = (themeKey) => {
    const theme = themes[themeKey];
    const exactWidthImgs = calcWidthImgs(theme.length)

    document.getElementsByTagName("h1")[0].innerHTML = themeKey.toUpperCase()
    theme.forEach((article) => {
        const imgSrc = `url(src/${article}/1.jpg)`
        const tdElement = document.createElement("td");

        tdElement.style.backgroundImage = imgSrc
        tdElement.innerHTML = `<h2>${article}</h2>`
        tdElement.style.width = `${exactWidthImgs}%`
        tdElement.style.height = "150px"
        trContainer.appendChild(tdElement);
        createSelectedTopicImgsListeners(tdElement, article)
    })
}




//remove the 3rd td because I want to make it by my way
document.getElementsByTagName("td")[2].remove()
displayImgsOfCurrentTheme(keys[currentThemeIndex]);

/**
 * return to the page where u can select a theme
 * @param {any} "h1"
 * @returns {any}
 */
document.getElementsByTagName("h1")[0].addEventListener("click", () => {
    deleteImgs()
    displayImgsOfCurrentTheme(keys[currentThemeIndex]);
})

/**
 * btn next article
 * @param {any} "siguiente" id btn
 * @returns {any}
 */
document.getElementById("siguiente").addEventListener("click", () => {
    currentThemeIndex++
    currentThemeIndex = currentThemeIndex % Object.keys(themes).length
    deleteImgs()
    displayImgsOfCurrentTheme(keys[currentThemeIndex]);
})

/**
 * btn previous article
 * @param {any} "anterior" id btn
 * @returns {any}
 */
document.getElementById("anterior").addEventListener("click", () => {
    const previousPosition = (currentThemeIndex - 1 + Object.keys(themes).length) % Object.keys(themes).length //cyclic iteration through the residue without validation

    currentThemeIndex = previousPosition >= 0 ? previousPosition : Object.keys(themes).length - 1
    deleteImgs()
    displayImgsOfCurrentTheme(keys[currentThemeIndex]);
})