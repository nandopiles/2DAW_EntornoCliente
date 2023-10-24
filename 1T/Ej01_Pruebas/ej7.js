let word
let arrayWord
let wordReverse
let arrayReverse = new Array

word = prompt("Enter word")
arrayWord = word.split("")
console.log(arrayWord);

for (let i = arrayWord.length; i >= 0; i--) {
    arrayReverse.push(arrayWord[i])
}
wordReverse = arrayReverse.join('')
console.log(wordReverse);
if (wordReverse == word) {
    alert("LO ES")
} else {
    alert("NO LO ES")
}