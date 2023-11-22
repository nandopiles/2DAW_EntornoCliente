const urlAPI = 'https://rickandmortyapi.com/api/character/';
let arrayToBrowsePages = null;
let apiResponseData = null;
let maxPages = null;
let characterSearched = null;



/**
 * Saves all the characters of the current page in the local storage.
 * @returns {void}
 */
const saveInLocalStorage = () => {
    apiResponseData.results.forEach(character => {
        const insertCharacter = {
            name: character.name,
            backgroundImg: character.image
        }
        window.localStorage.setItem(character.name, JSON.stringify(insertCharacter));
    });
};

/**
 * Gets all the characters from the page selected.
 * @param {Number} page
 * @returns {void}
 */
const loadCharactersByPage = async (page) => {
    try {
        const response = await fetch(urlAPI + `?page=${page}`);
        if (response.ok) {
            apiResponseData = await response.json();
            maxPages = apiResponseData.info.pages;
            saveInLocalStorage();
        }
    }
    catch (error) {
        console.log(error);
    }
};

/**
 * Loads all the characters from all the pages.
 * @param {Number} page
 * @returns {void}
 */
const loadData = async (page) => await loadCharactersByPage(page);

/**
 * Displays a modal window with the name and background image of the character selected.
 * @param {Object|null} character
 * @returns {void}
 */
const displayModalWithCharacterSearched = (character) => {
    document.getElementsByClassName('modal-content')[0].style.backgroundImage = "url(" + character.backgroundImg + ")";
    document.getElementsByTagName('h1')[1].textContent = character.name;
    document.getElementsByClassName('modal')[0].className = "modal show-modal";

    document.getElementsByClassName('close-button')[0].addEventListener('click', () => {
        if (document.getElementsByClassName('modal show-modal').length > 0)
            document.getElementsByClassName('modal show-modal')[0].className = "modal";
    });
};

/**
 * Searches a specific character by his name
 * @returns {void}
 */
const searchCharacter = () => {
    document.getElementsByTagName('form')[0].addEventListener('submit', (event) => {
        event.preventDefault();

        const characterData = JSON.parse(window.localStorage.getItem(document.getElementsByTagName('input')[0].value));
        displayModalWithCharacterSearched(characterData);
    });
};




for (let i = 1; i <= 42; i++)
    loadData(i);

searchCharacter();