const imgFruitsPaths = [
    "url(./images/frutas/1.jpg)",
    "url(./images/frutas/2.jpg)",
    "url(./images/frutas/3.jpg)",
];

const imgFlowersPaths = [
    "url(./images/flores/1.jpg)",
    "url(./images/flores/2.jpg)",
    "url(./images/flores/3.jpg)"
];



/**
 * Gets a random url img.
 * @param {Array} array
 * @returns {String}
 */
const getRandomPhoto = (array) => {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
};

/**
 * Displays the Fruit's imgs.
 * @returns {any}
 */
const displayFruitsImgs = (interval) => {
    imgFruitsPaths.forEach((_, index) => {
        document.getElementsByClassName('photo')[index].style.backgroundImage = getRandomPhoto(imgFruitsPaths);
        document.getElementsByClassName('photo')[index].addEventListener('click', () => clearInterval(interval));
    });
};

/**
 * Displays the Flower's imgs.
 * @returns {any}
 */
const displayFlowersImgs = (interval) => {
    imgFlowersPaths.forEach((_, index) => {
        document.getElementsByClassName('photo')[index + 3].style.backgroundImage = getRandomPhoto(imgFlowersPaths);
        document.getElementsByClassName('photo')[index + 3].addEventListener('click', () => clearInterval(interval));
    });
};



const intervalFruits = setInterval(() => {
    displayFruitsImgs(intervalFruits);
}, 700);

const intervalFlowers = setInterval(() => {
    displayFlowersImgs(intervalFlowers);
}, 700);