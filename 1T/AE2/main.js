const urlAPI = 'https://rickandmortyapi.com/api/character/';
const gridContainer = document.getElementsByClassName('grid-container')[0];
const initialDataNumImgs = Array.from({ length: 3 });
const pageDataNumImgs = Array.from({ length: 20 });
let apiResponseData = null;
let maxPages = null;
let currentNumberPage = 1;



/**
 * Removes all the elements which have the class card implemented.
 * @returns {void}
 */
const deleteAllCards = () => {
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => card.remove());
};

/**
 * Gets all the characters from the API.
 * @returns {void}
 */
const loadAllCharacters = async () => {
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
 * Gets a specific character depending on the id passed by parameter from the API.
 * @returns {Promise<any>}
 */
const loadCharacterById = async (id) => {
    try {
        const response = await fetch(urlAPI + `/${id}`);
        if (response.ok) {
            const specificCharacter = await response.json();
            return specificCharacter;
        }
    }
    catch (error) {
        console.log(error);
    }
};

/**
 * Opens the modal window.
 * @returns {void}
*/
const openModal = () => {
    const modalElement = document.querySelector(".modal");

    if (modalElement)
        modalElement.classList.add("show-modal");
};

/**
 * Closes the modal window.
 * @returns {void}
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
 * @param {Number} position Position of the character in the list.
 * @returns {void}
 */
const enlargeImgSelected = (element, id) => {
    element.addEventListener('click', async () => {
        openModal();
        closeModal();
        const character = await loadCharacterById(id);
        document.getElementsByTagName('h1')[1].textContent = character.name;
        document.getElementsByClassName('modal-content')[0].style.backgroundImage = `url("${character.image}")`;
        document.getElementsByClassName('modal-content')[0].style.backgroundSize = 'cover';
        document.getElementsByClassName('modal-content')[0].style.backgroundPosition = 'center';
        document.getElementsByClassName('modal-content')[0].style.backgroundRepeat = 'no-repeat';
    });
};

/**
 *? Adds the character clicked into the favorite list.
 * @param {Number} id
 * @param {Element} nameElement
 * @param {String} backgroundImgValue
 * @param {String} genderValue
 * @param {String} speciesValue
 * @param {String} nameValue
 * @param {String} statusValue
 * @returns {void}
 */
const moveToFavorites = (id, positionInTheListValue, nameElement, backgroundImgValue, genderValue, speciesValue, nameValue, statusValue) => {
    nameElement.addEventListener('click', () => {
        const insertCharacter = {
            backgroundImage: backgroundImgValue,
            gender: genderValue,
            species: speciesValue,
            name: nameValue,
            status: statusValue,
            positionInTheList: positionInTheListValue
        };
        window.localStorage.setItem(id, JSON.stringify(insertCharacter));
    });
};

/**
 * Generates a random letter from the alphabet.
 * @returns {String} a random letter from the alphabet in Uppercase.
 */
const generateRandomLetter = () => {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    return letters[Math.floor(Math.random() * letters.length)];
};

/**
 * Creates a matrix animation completing the name of the character.
 * @param {Element} elementHTML
 * @returns {void}
 */
const autocompleteNameAnimation = (elementHTML) => {
    let name = elementHTML.textContent;
    let index = 0;
    let count = 0;

    elementHTML.textContent = "";
    const interval = setInterval(() => {
        if (count < 12) {
            elementHTML.textContent = name.substring(0, index) + generateRandomLetter();
            count++;
        } else {
            elementHTML.textContent = name.substring(0, index) + name[index].toUpperCase();
            count = 0;
            index++;

            if (index === name.length)
                clearInterval(interval);
        }
    }, 15);
};

/**
 * Does a fade-in effect when displays the images.
 * @param {Element} element
 * @param {String} backgroundImageValue
 * @returns {void}
 */
const changeBackgroundImage = (element, backgroundImageValue) => {
    const fadeDuration = 1000;
    const stepsTransition = 50;
    const initialOpacity = 0;
    const backgroundImage = new Image();
    let currentOpacity = initialOpacity;

    backgroundImage.src = backgroundImageValue;
    backgroundImage.onload = () => {
        const intervalTime = fadeDuration / stepsTransition;

        const fadeIn = setInterval(() => {
            currentOpacity += 1 / stepsTransition;
            element.style.backgroundImage = `url(${backgroundImageValue})`;
            element.style.backgroundSize = 'cover';
            element.style.opacity = currentOpacity;

            if (currentOpacity >= 1) {
                clearInterval(fadeIn);
            }
        }, intervalTime);
    };
}



/**
 * Creates a card of the character selected with all his information.
 * @param {Number} positionInTheList Position of the character in the list.
 * @param {String} backgroundImg
 * @param {String} gender
 * @param {String} species
 * @param {String} name
 * @param {String} status
 * @returns {void}
 */
const createImgsCards = (positionInTheList, id, backgroundImg, gender, species, name, status) => {
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

    changeBackgroundImage(item0Element, backgroundImg);
    enlargeImgSelected(triggerElement, id);
    moveToFavorites(id, positionInTheList, item3Element, backgroundImg, gender, species, name, status);
    autocompleteNameAnimation(item3Element);
};

/**
 * Creates a "BackToMainPageBtn" in the container passed by parameter.
 * @returns {void}
 */
const createBackToMainPage = (containerId) => { document.getElementById(containerId).innerHTML = '<button id="backMainPage-btn">VOLVER</button>'; };

/**
 * Shows all the info about the character of the position given by parameter.
 * @param {Number} position of the character in the array.
 * @returns {void}
 */
const showImgs = async (position) => {
    if (apiResponseData.results[position] !== undefined)
        createImgsCards(position, apiResponseData.results[position].id, apiResponseData.results[position].image, apiResponseData.results[position].gender, apiResponseData.results[position].species, apiResponseData.results[position].name, apiResponseData.results[position].status);
};

/**
 *  Displays the info of the firsts characters.
 * @param {Array} arrayData number of characters to display.
 * @returns {void}
 */
const displayData = async (arrayData) => {
    await loadAllCharacters();
    document.getElementById('number-page').innerHTML = currentNumberPage;
    arrayData.forEach((_, index) => showImgs(index));
};

/**
 * Creates a "nextBtn" in the container passed by parameter.
 * @param {Number} containerId
 * @returns {void}
 */
const createNextBtn = (containerId) => { document.getElementById(containerId).innerHTML = `<button id="next-btn">SIGUIENTE</button>`; };

/**
 * Creates a "previousBtn" in the container passed by parameter.
 * @param {Number} containerId
 * @returns {void}
 */
const createPreviousBtn = (containerId) => { document.getElementById(containerId).innerHTML = `<button id="previous-btn">ANTERIOR</button>`; };

/**
 *  Creates a "ShowMoreBtn" in the container passed by parameter.
 * @param {Number} containerId
 * @returns {void}
 */
const createShowMoreBtn = (containerId) => { document.getElementById(containerId).innerHTML = `<button id="show-more">MOSTRAR MÁS</button>`; };

/**
 * Creates the both buttons.
 * The previous one and the next one.
 * @param {Number} containerId
 * @returns {void}
 */
const createBothBtn = (containerId) => { document.getElementById(containerId).innerHTML = `<button id="previous-btn">ANTERIOR</button><button id="next-btn">SIGUIENTE</button>`; };

/**
 * Listener function for the show-more btn.
 * 
 * Shows all the characters of the page.
 * @returns {void}
 */
const listenerFunctionForShowMoreBtn = () => {
    deleteAllCards();
    displayData(pageDataNumImgs);
    if (currentNumberPage === 1) {
        createNextBtn('render-more');
        changeToNextPage();
    } else if (currentNumberPage === maxPages) {
        createPreviousBtn('render-more')
        changeToPreviousPage();
    } else {
        createBothBtn('render-more');
        changeToPreviousPage();
        changeToNextPage();
    }
};

/**
 * Displays the favorite list of characters.
 * @returns {void}
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
    });

    Object.keys(localStorage).forEach(key => {
        const favoriteObject = JSON.parse(localStorage.getItem(key));

        createImgsCards(favoriteObject.positionInTheList, key, favoriteObject.backgroundImage, favoriteObject.gender,
            favoriteObject.species, favoriteObject.name, favoriteObject.status);
    });
};

/**
 * Changes the current page to the next one.
 * @returns {void}
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
 * @returns {void}
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
document.getElementsByTagName('h1')[0].addEventListener('click', displayFavorites);
document.getElementsByTagName('button')[0].setAttribute('id', 'show-more');

document.getElementById('show-more').addEventListener('click', listenerFunctionForShowMoreBtn)
