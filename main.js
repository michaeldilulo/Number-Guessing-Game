let magicRandomNumber = Math.floor(Math.random() * 10 + 1);

let userGuesses = document.getElementById('previousGuesses');
let highLowGuess = document.getElementById('highLowGuessNumber');
let userCheckGuess = document.getElementById('userGuessSubmit');
let userGuessInput = document.getElementById('userGuessInput');
let guessCount = 1;
let previousGuessCount = 0;
let resetButton;

const checkGuess = () => {
    let userGuess = Number(userGuessInput.value);
    if (guessCount === 1) {
        previousGuessCount++;
    }

    userGuesses.textContent += userGuess + ' ';

    if (userGuess === magicRandomNumber) {
        highLowGuess.textContent = "You Guessed Right!";
        highLowGuess.style.backgroundColor = 'green';
        highLowGuess.style.color = 'white';
        highLowGuess.style.padding = '10px'
        highLowGuess.style.borderRadius = "5px"
    } else {
        highLowGuess.textContent = "You Guessed Wrong!";
        highLowGuess.style.backgroundColor = 'red';
        highLowGuess.style.color = 'white';
        highLowGuess.style.padding = '10px'
        highLowGuess.style.borderRadius = "5px"
    }
}
