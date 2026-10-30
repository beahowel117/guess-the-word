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

function makeGuess(letter) {
    let upperCaseLetter = letter.toUpperCase();

    for (const guessedLetter of guessedLetters) {
        if (upperCaseLetter === guessedLetter) {
            message.innerText = "You already guessed that letter. Try again.";
            return;
        }
    }

    console.log('guessedLetters:', guessedLetters);
    guessedLetters.push(upperCaseLetter);
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
