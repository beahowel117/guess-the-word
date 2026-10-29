const guessedLettersList = document.querySelector(".guessed-letters");
const guessButton = document.querySelector(".guess");
const letterInput = document.querySelector(".letter");
const wordInProgress = document.querySelector(".word-in-progress");
const remainingGuessesElement = document.querySelector(".remaining");
const remainingGuessesSpan = document.querySelector(".remaining span");
const message = document.querySelector(".message"); 
const hiddenButton = document.querySelector(".hide");
let word = "magnolia";

function updateWordInProgress(word){
    // Implementation for handling the next letter guess
    const placeholders = [];

    for(const letter of word) {
        console.log(letter);
        placeholders.push("●");
    }

    return wordInProgress.innerText = placeholders.join("");
}

updateWordInProgress(word);

guessButton.addEventListener("click", function(e) {
    e.preventDefault();

    const guessedLetter = letterInput.value;
    console.log(guessedLetter);
    letterInput.value = "";
});
