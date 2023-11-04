const urlAPI = 'https://rickandmortyapi.com/api/character';
const gridContainer = document.getElementsByClassName('grid-container')[0];
const initialDataNumImgs = Array.from({ length: 3 });
const pageDataNumImgs = Array.from({ length: 20 });
let apiResponseData = null;



/**
 * Gets all the characters from the API.
 */
const fetchDataFromAPI = async () => {
    try {
        const response = await fetch(urlAPI);
        if (response.ok)
            apiResponseData = await response.json();
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

    if (modalElement) {
        modalElement.classList.add("show-modal");
    }
};

/**
 * Closes the modal window.
 * @returns {any}
 */
const closeModal = () => {
    const closeButton = document.querySelector(".close-button");
    const modalElement = document.querySelector(".modal.show-modal");

    if (closeButton && modalElement) {
        closeButton.addEventListener("click", () => {
            modalElement.classList.remove("show-modal");
        });
    }
};

/**
 * Confs the modal window with the info of the character selected.
 * @param {any} element Which character is.
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
    })
};

/**
 * Creates a card of the character selected with all his information.
 * @param {any} position Position of the character in the list.
 * @param {any} backgroundImg
 * @param {any} gender
 * @param {any} species
 * @param {any} name
 * @param {any} status
 * @returns {any}
 */
const displayImgsCards = (position, backgroundImg, gender, species, name, status) => {
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
};

/**
 * Shows all the info about the character of the position given by parameter.
 * @param {Number} position of the character in the array.
 * @returns {any}
 */
const showImgs = async (position) => {
    displayImgsCards(position, apiResponseData.results[position].image, apiResponseData.results[position].gender, apiResponseData.results[position].species, apiResponseData.results[position].name, apiResponseData.results[position].status);
};

/**
 *  Displays the info of the firsts characters.
 * @param {Array} arrayData number of characters to display.
 * @returns {any}
 */
const initializeInitialData = async (arrayData) => {
    await fetchDataFromAPI();
    arrayData.forEach((_, index) => showImgs(index));
};



initializeInitialData(initialDataNumImgs);
document.getElementsByClassName('card')[0].remove();
document.getElementsByTagName('button')[0].addEventListener('click', async () => {

})
