const seriesList = [
    {
        tittle: "Los Soprano",
        characters: {
            "Tony Soprano": "James Gandolfini",
            "Carmela Soprano": "Edie Falco",
            "Anthony Junior": "Robert Iler"
        },
        backgroundImage: "https://www.econlib.org/wp-content/uploads/2019/04/sopranos-1024x576.jpg",
        backgroundClass: "one"
    },
    {
        tittle: "The Wire",
        characters: {
            "Omar": "Michael K.",
            "McNulty": "Dominic West",
            "Stringer Bell": "Idris Elba"
        },
        backgroundImage: "https://hips.hearstapps.com/es.h-cdn.co/fotoes/images/cinefilia/x-cosas-que-no-sabias-de-the-wire/the-wire-curiosidades-11/110956003-1-esl-ES/The-Wire-Curiosidades-11.jpg",
        backgroundClass: "two"
    },
    {
        tittle: "Seinfeld",
        characters: {
            "Jerry": "Larry David",
            "George": "Jason Alexander",
            "Kramer": "Michael Richards"
        },
        backgroundImage: "https://elcomercio.pe/resizer/yp-jUSUKE4rw-U4YxCXbubK6tR4=/580x330/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/6EHVLKEGV5EYVIROC6FLMOIAKA.jpg",
        backgroundClass: "three"
    }
]
const filmsList = [
    {
        tittle: "El Hermano",
        characters: {
            "Teddy": "MHD",
            "Papou": "Almamy Kanoute",
            "Enzo": "Darren Muselet"
        },
        backgroundImage: "https://pics.filmaffinity.com/Hermano-899541913-large.jpg",
        backgroundClass: "one"
    },
    {
        tittle: "Borning",
        characters: {
            "Nina": "Ida Husøy",
            "Sylvia": "Kathrine Thorborg",
            "Robyn": "Alexandra Maria"
        },
        backgroundImage: "https://1.bp.blogspot.com/-044Tym-oEhs/VeRCAftMnPI/AAAAAAABF5s/41sIt2htnUE/s1600/borning.jpg",
        backgroundClass: "two"
    },
    {
        tittle: "The House",
        characters: {
            "Mabel": "Mia Goth",
            "Developer": "Jarvis Cocker",
            "Jen": "Helena Bonham"
        },
        backgroundImage: "https://static1.colliderimages.com/wordpress/wp-content/uploads/2022/01/the-house-endings.jpg",
        backgroundClass: "three"
    }
]
let currentThemeIndex = 0
let currentCharacterIndex = 0
let themeChoose = seriesList



/**
 * display the info of the current theme (img, tittle, character, actor)
 * @returns {any}
 */
const displayCurrentInfo = () => {
    const currentTheme = themeChoose[currentThemeIndex]
    const currentImg = currentTheme.backgroundImage
    const currentTittle = currentTheme.tittle
    const charactersList = Object.keys(currentTheme.characters)
    const currentCharacter = charactersList[currentCharacterIndex];
    const actor = currentTheme.characters[currentCharacter]

    document.getElementsByTagName("div")[4].className = `${currentTheme.backgroundClass}`
    document.getElementsByTagName("img")[0].src = `${currentImg}`
    document.getElementsByTagName("h1")[1].innerHTML = `${currentTittle}`
    document.getElementsByTagName("h2")[0].innerHTML = `${currentCharacter}`
    document.getElementsByTagName("h3")[0].innerHTML = `${actor}`
}

/**
 * show the next serie/film
 * @returns {any}
 */
const showNextTheme = () => {
    currentCharacterIndex = 0
    currentThemeIndex++                                         //only works forward
    currentThemeIndex = currentThemeIndex % themeChoose.length //cyclic iteration through the residue without validation
    displayCurrentInfo()
}

const showPreviousTheme = () => {                                                                 //only works backwards
    const previousPosition = (currentThemeIndex - 1 + themeChoose.length) % themeChoose.length //cyclic iteration through the residue without validation

    currentCharacterIndex = 0
    currentThemeIndex = previousPosition >= 0 ? previousPosition : themeChoose.length - 1
    displayCurrentInfo()
}

/**
 * show the next character
 * @returns {any}
 */
const showNextCharacter = () => {
    const charactersList = Object.keys(themeChoose[currentThemeIndex].characters)

    currentCharacterIndex++                                                //only works forward
    currentCharacterIndex = currentCharacterIndex % charactersList.length //cyclic iteration through the residue without validation
    displayCurrentInfo()
}

/**
 * show the previous character
 * @returns {any}
 */
const showPreviousCharacter = () => {
    const charactersList = Object.keys(themeChoose[currentThemeIndex].characters)                          //only works backwards
    const previousPosition = (currentCharacterIndex - 1 + charactersList.length) % charactersList.length //cyclic iteration through the residue without validation

    currentCharacterIndex = previousPosition >= 0 ? previousPosition : charactersList.length - 1
    displayCurrentInfo()
}




/**
 * change the current theme to Series
 * @param {any} "td" btn
 * @returns {any}
 */
document.getElementsByTagName("td")[0].addEventListener("click", () => {
    if (themeChoose !== seriesList) {
        themeChoose = seriesList
        currentThemeIndex = 0
        currentCharacterIndex = 0
        displayCurrentInfo()
    }
})


/**
 * change the current theme to Films
 * @param {any} "td" btn
 * @returns {any}
 */
document.getElementsByTagName("td")[1].addEventListener("click", () => {
    if (themeChoose !== filmsList) {
        themeChoose = filmsList
        currentThemeIndex = 0
        currentCharacterIndex = 0
        displayCurrentInfo()
    }
})

/**
 * btn previous theme
 * @param {any} "a" btn
 * @returns {any}
 */
document.getElementsByTagName("a")[2].addEventListener("click", () => {
    showPreviousTheme()
})

/**
 * btn next theme
 * @param {any} "a" btn
 * @returns {any}
 */
document.getElementsByTagName("a")[3].addEventListener("click", () => {
    showNextTheme()
})

/**
 * btn previous character
 * @param {any} "a" btn
 * @returns {any}
 */
document.getElementsByTagName("a")[0].addEventListener("click", () => {
    showPreviousCharacter()
})

/**
 * btn next character
 * @param {any} "a" btn
 * @returns {any}
 */
document.getElementsByTagName("a")[1].addEventListener("click", () => {
    showNextCharacter()
})