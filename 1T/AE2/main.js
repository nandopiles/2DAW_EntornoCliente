const urlAPI = 'https://rickandmortyapi.com/api/character';
const gridContainer = document.getElementsByClassName('grid-container')[0];
const initialDataNumImgs = Array.from({ length: 3 });
const pageDataNumImgs = Array.from({ length: 20 });
let apiResponseData = null;
let maxPages = null;
let currentNumberPage = 1;



/**
 * Removes all the elements which have the class card implemented.
 * @returns {any}
 */
const deleteAllCards = () => {
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => card.remove());
};

/**
 * Gets all the characters from the API.
 * @returns {any}
 */
const fetchDataFromAPI = async () => {
    try {
        const response = await fetch(urlAPI + `?page=${currentNumberPage}`);
        if (response.ok) {
            apiResponseData = await response.json();
            maxPages = apiResponseData.info.pages;
        }
    }
    catch (error) {
        console.log(error);
    }
};

/**
 * Opens the modal window.
 * @returns {any}
*/
const openModal = () => {
    const modalElement = document.querySelector(".modal");

    if (modalElement)
        modalElement.classList.add("show-modal");
};

/**
 * Closes the modal window.
 * @returns {any}
 */
const closeModal = () => {
    const closeButton = document.querySelector(".close-button");
    const modalElement = document.querySelector(".modal.show-modal");

    if (closeButton && modalElement)
        closeButton.addEventListener("click", () => modalElement.classList.remove("show-modal"));
};

/**
 * Confs the modal window with the info of the character selected.
 * @param {Element} element Which character is.
 * @param {any} position Position of the character in the list.
 * @returns {any}
 */
const enlargeImgSelected = (element, position) => {
    element.addEventListener('click', () => {
        openModal();
        closeModal();
        document.getElementsByTagName('h1')[1].textContent = apiResponseData.results[position].name;
        document.getElementsByClassName('modal-content')[0].style.backgroundImage = `url("${apiResponseData.results[position].image}")`;
        document.getElementsByClassName('modal-content')[0].style.backgroundSize = 'cover';
        document.getElementsByClassName('modal-content')[0].style.backgroundPosition = 'center';
        document.getElementsByClassName('modal-content')[0].style.backgroundRepeat = 'no-repeat';
    });
};

/**
 * Adds the character clicked into the favorite list.
 * @param {Number} id
 * @param {Element} nameElement
 * @param {String} backgroundImgValue
 * @param {String} genderValue
 * @param {String} speciesValue
 * @param {String} nameValue
 * @param {String} statusValue
 * @returns {any}
 */
const moveToFavorites = (id, nameElement, backgroundImgValue, genderValue, speciesValue, nameValue, statusValue) => {
    nameElement.addEventListener('click', () => {
        const insertCharacter = {
            backgroundImage: backgroundImgValue,
            gender: genderValue,
            species: speciesValue,
            name: nameValue,
            status: statusValue
        };
        window.localStorage.setItem(id, JSON.stringify(insertCharacter));
    });
};

/**
 * Creates a card of the character selected with all his information.
 * @param {Number} position Position of the character in the list.
 * @param {String} backgroundImg
 * @param {String} gender
 * @param {String} species
 * @param {String} name
 * @param {String} status
 * @returns {any}
 */
const createImgsCards = (position, backgroundImg, gender, species, name, status) => {
    const cardElement = document.createElement('div');
    const thumbnailElement = document.createElement('div');
    const item0Element = document.createElement('div');
    const footerElement = document.createElement('div');
    const itemsContainerElement = document.createElement('div');
    const item1Element = document.createElement('h3');
    const item2Element = document.createElement('h3');
    const item3Element = document.createElement('h2');
    const item4Element = document.createElement('h3');
    const botoneraContainerElement = document.createElement('div');
    const triggerElement = document.createElement('div');

    cardElement.className = 'card';
    thumbnailElement.className = 'thumbnail';
    item0Element.className = 'item-0';
    footerElement.className = 'card-footer';
    item1Element.className = 'item-1';
    item2Element.className = 'item-2';
    item3Element.className = 'item-3';
    item4Element.className = 'item-4';
    botoneraContainerElement.className = 'botonera';
    triggerElement.setAttribute('id', 'trigger');
    triggerElement.textContent = "Ampliar";

    gridContainer.appendChild(cardElement);
    cardElement.appendChild(thumbnailElement);
    thumbnailElement.appendChild(item0Element);
    cardElement.appendChild(footerElement);
    footerElement.appendChild(itemsContainerElement);
    itemsContainerElement.appendChild(item1Element);
    itemsContainerElement.appendChild(item2Element);
    itemsContainerElement.appendChild(item3Element);
    itemsContainerElement.appendChild(item4Element);
    footerElement.appendChild(botoneraContainerElement);
    botoneraContainerElement.appendChild(triggerElement);

    item0Element.style.backgroundImage = `url(${backgroundImg})`;
    item1Element.textContent = gender;
    item2Element.textContent = species;
    item3Element.textContent = name;
    item4Element.textContent = status;

    enlargeImgSelected(triggerElement, position);
    moveToFavorites(position, item3Element, backgroundImg, gender, species, name, status);
};

/**
 * Creates a "BackToMainPageBtn" in the container passed by parameter.
 * @returns {any}
 */
const createBackToMainPage = (containerId) => { document.getElementById(containerId).innerHTML = '<button id="backMainPage-btn">VOLVER</button>'; };

/**
 * Shows all the info about the character of the position given by parameter.
 * @param {Number} position of the character in the array.
 * @returns {any}
 */
const showImgs = async (position) => {
    if (apiResponseData.results[position] !== undefined)
        createImgsCards(position, apiResponseData.results[position].image, apiResponseData.results[position].gender, apiResponseData.results[position].species, apiResponseData.results[position].name, apiResponseData.results[position].status);
};

/**
 *  Displays the info of the firsts characters.
 * @param {Array} arrayData number of characters to display.
 * @returns {any}
 */
const displayData = async (arrayData) => {
    await fetchDataFromAPI();
    document.getElementById('number-page').innerHTML = currentNumberPage;
    arrayData.forEach((_, index) => showImgs(index));
};

/**
 * Creates a "nextBtn" in the container passed by parameter.
 * @param {Number} containerId
 * @returns {any}
 */
const createNextBtn = (containerId) => { document.getElementById(containerId).innerHTML = `<button id="next-btn">SIGUIENTE</button>`; };

/**
 * Creates a "previousBtn" in the container passed by parameter.
 * @param {Number} containerId
 * @returns {any}
 */
const createPreviousBtn = (containerId) => { document.getElementById(containerId).innerHTML = `<button id="previous-btn">ANTERIOR</button>`; };

/**
 *  Creates a "ShowMoreBtn" in the container passed by parameter.
 * @param {Number} containerId
 * @returns {any}
 */
const createShowMoreBtn = (containerId) => { document.getElementById(containerId).innerHTML = `<button id="show-more">MOSTRAR MÁS</button>`; };

/**
 * Creates the both buttons.
 * The previous one and the next one.
 * @param {Number} containerId
 * @returns {any}
 */
const createBothBtn = (containerId) => { document.getElementById(containerId).innerHTML = `<button id="previous-btn">ANTERIOR</button><button id="next-btn">SIGUIENTE</button>`; };

/**
 * Generates a random letter from the alphabet.
 * @returns {String} a random letter from the alphabet in Uppercase.
 */
const generateRandomLetter = () => {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    return letters[Math.floor(Math.random() * letters.length)];
};

/**
 * Does an animation that change the letters in a random way until the name is correctly formed.
 * 
 * It's a recursive function, that's the reason why you have to passed 0 by parameter to start in that position and then it will change calling itself.
 * @param {Element} elementHTML
 * @param {Number} positionLetter always pass by parameter [0], to say that you want to start by the letter in the position 0
 * @param {Number} position of the character in the list.
 * @returns {any}
 */
// const autocompleteNameAnimation = (elementHTML, positionLetter, position) => {
//     if (positionLetter < apiResponseData.results[position].name.length) {
//         elementHTML.textContent += generateRandomLetter();

//         if (elementHTML.textContent[positionLetter] === apiResponseData.results[position].name[positionLetter])
//             autocompleteNameAnimation(positionLetter + 1);
//         else {
//             elementHTML.textContent = elementHTML.textContent.slice(0, -1);
//             autocompleteNameAnimation(positionLetter);
//         }
//     }
// };

/**
 * Does an animation that change the letters in a random way until the name is correctly formed.
 * 
 * It's a recursive function, that's the reason why you have to passed 0 by parameter to start in that position and then it will change calling itself.
 * @param {Element} elementHTML
 * @param {Number} positionLetter always pass by parameter [0], to say that you want to start by the letter in the position 0
 * @param {Number} position of the character in the list.
 * @returns {any}
 */
const autocompleteNameAnimation = (elementHTML, position) => {
    console.log('b');
    const name = apiResponseData.results[position].name;
    let index = 0;

    const interval = setInterval(() => {
        if (index < name.length) {
            elementHTML.textContent += generateRandomLetter();

            // Verificar si la letra coincide con la letra del nombre en la posición actual
            if (elementHTML.textContent[index] === name[index])
                index++;
        } else
            clearInterval(interval);
    }, 100);
};

/**
 * Description
 * @param {Array} elementsHTML
 * @returns {any}
 */
const initializeAnimationChangeLetters = (elementsHTML) => {
    console.log('a');
    // elementsHTML.forEach((element, index) => autocompleteNameAnimation(element, index));
    elementsHTML.forEach(element => console.log(element));
};

/**
 * Listener function for the show-more btn.
 * 
 * Shows all the characters of the page.
 * @returns {any}
 */
const listenerFunctionForShowMoreBtn = async () => {
    deleteAllCards();
    displayData(pageDataNumImgs);
    if (currentNumberPage === 1) {
        createNextBtn('render-more');
        changeToNextPage();
        initializeAnimationChangeLetters(document.getElementsByClassName('item-3'));
    } else if (currentNumberPage === maxPages) {
        createPreviousBtn('render-more')
        changeToPreviousPage();
        initializeAnimationChangeLetters(document.getElementsByClassName('item-3'));
    } else {
        createBothBtn('render-more');
        changeToPreviousPage();
        changeToNextPage();
        initializeAnimationChangeLetters(document.getElementsByClassName('item-3'));
    }
};

/**
 * Displays the favorite list of characters.
 * @returns {any}
 */
const displayFavorites = () => {
    deleteAllCards();
    document.getElementById("number-page").innerHTML = 'Favoritos';
    createBackToMainPage('render-more');

    document.getElementById('backMainPage-btn').addEventListener('click', () => {
        deleteAllCards();
        displayData(initialDataNumImgs);
        createShowMoreBtn('render-more');
        document.getElementById('show-more').addEventListener('click', listenerFunctionForShowMoreBtn)
    })

    Object.keys(localStorage).forEach(key => {
        createImgsCards(key, JSON.parse(localStorage.getItem(key)).backgroundImage, JSON.parse(localStorage.getItem(key)).gender,
            JSON.parse(localStorage.getItem(key)).species, JSON.parse(localStorage.getItem(key)).name);
    });
};

/**
 * Changes the current page to the next one.
 * @returns {any}
 */
const changeToNextPage = () => {
    document.getElementById('next-btn').addEventListener('click', () => {
        currentNumberPage++;
        document.getElementById('number-page').innerHTML = currentNumberPage;
        deleteAllCards();
        displayData(initialDataNumImgs);
        createShowMoreBtn('render-more');
        document.getElementById('show-more').addEventListener('click', listenerFunctionForShowMoreBtn)
    });
};

/**
 * Changes the current page to the previous one.
 * @returns {any}
 */
const changeToPreviousPage = () => {
    document.getElementById('previous-btn').addEventListener('click', () => {
        currentNumberPage--;
        document.getElementById('number-page').innerHTML = currentNumberPage;
        deleteAllCards();
        displayData(initialDataNumImgs);
        createShowMoreBtn('render-more');
        document.getElementById('show-more').addEventListener('click', listenerFunctionForShowMoreBtn)
    });
};



deleteAllCards();
displayData(initialDataNumImgs);
document.getElementsByTagName('h1')[0].addEventListener('click', () => displayFavorites());
document.getElementsByTagName('button')[0].setAttribute('id', 'show-more');

document.getElementById('show-more').addEventListener('click', listenerFunctionForShowMoreBtn)