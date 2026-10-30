const guessedLettersList = document.querySelector(".guessed-letters");
const guessButton = document.querySelector(".guess");
const letterInput = document.querySelector(".letter");
const wordInProgress = document.querySelector(".word-in-progress");
const remainingGuessesElement = document.querySelector(".remaining");
const remainingGuessesSpan = document.querySelector(".remaining span");
const message = document.querySelector(".message"); 
const hiddenButton = document.querySelector(".hide");
const guessedLetters = [];
let word = "magnolia";

function updateWordInProgress(guessedLetters) {
    const wordUpper = word.toUpperCase();
    const wordArray = wordUpper.split("");
    console.log(wordArray);

    const updatedWord = wordArray.map(letter =>
        guessedLetters.includes(letter) ? letter : "●"
    );

    wordInProgress.innerText = updatedWord.join("");
}

updateWordInProgress(guessedLetters);

function validateInput(input) {
    const acceptedLetter = /[a-zA-Z]/;

    if (input.length === 0) {
        message.innerText = "Please enter a letter.";
    } else if (input.length > 1) {
        message.innerText = "Please enter only one letter.";
    } else if (!input.match(acceptedLetter)) {
        message.innerText = "Please enter a letter, not a number or symbol.";
    } else {
        return input;
    }
};
function updateGuessedLetters() {
    guessedLettersList.innerHTML = "";

    for (const letter of guessedLetters) {
        const listItem = document.createElement("li");
        listItem.innerText = letter;
        guessedLettersList.append(listItem);
    }
};
function makeGuess(letter) {
    const upperCaseLetter = letter.toUpperCase();

    if (guessedLetters.includes(upperCaseLetter)) {
        message.innerText = "You already guessed that letter. Try again.";
    } else {
        guessedLetters.push(upperCaseLetter);
        updateGuessedLetters();
        updateWordInProgress(guessedLetters);
    }
};

guessButton.addEventListener("click", function(e) {
    e.preventDefault();
    message.innerText = "";

    const input = letterInput.value;
    letterInput.value = "";

    const validatedInput = validateInput(input);
    console.log(validatedInput);
    if( validatedInput !== undefined) {
        makeGuess(validatedInput);
        console.log(guessedLetters);
    }
});
