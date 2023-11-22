const words = ["EXAMEN", "PRIMERA", "EVALUACION"];
const elementHTML = document.getElementsByTagName("h2")[0];



/**
 * Generates a random letter from the alphabet.
 * @returns {String} a random letter from the alphabet in Uppercase.
 */
const generateRandomLetter = () => {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    return letters[Math.floor(Math.random() * letters.length)];
};

/**
 * Creates a matrix animation completing the phrase.
 * @param {Element} elementHTML
 * @param {String} word
 * @param {Function} callback
 * @returns {void}
 */
const autocompleteNameAnimation = (elementHTML, word, callback) => {
    let index = word.length - 1;
    let count = 0;

    const interval = setInterval(() => {
        if (count < 15 && index >= 0) {
            const currentText = elementHTML.textContent;
            const randomLetters = currentText.substring(0, index) + generateRandomLetter() + currentText.substring(index + 1);
            elementHTML.textContent = randomLetters;
            count++;
        } else {
            const currentText = elementHTML.textContent;
            elementHTML.textContent = currentText.substring(0, index) + word[index] + currentText.substring(index + 1);
            count = 0;
            index--;

            if (index < 0) {
                clearInterval(interval);
                callback(); // Llama a la función de devolución de llamada cuando la palabra ha terminado de completarse
            }
        }
    }, 50);
};


/**
 * Animates words one by one from the given array.
 * @param {Element} elementHTML
 * @param {String[]} words
 * @returns {void}
 */
const animateWords = (elementHTML, words) => {
    let currentIndex = 0;

    const animateNextWord = () => {
        if (currentIndex < words.length) {
            const currentWord = words[currentIndex];
            currentIndex++;

            autocompleteNameAnimation(elementHTML, currentWord, animateNextWord);
        }
    };
    animateNextWord();
};



animateWords(elementHTML, words);