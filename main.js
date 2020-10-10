var magicNumber = Math.floor(Math.random() * 10 + 1);
var playerGuess = document.getElementById("userGuessInput").value;


function submitGuess() {
    console.log(magicNumber)
    if (playerGuess == magicNumber) {
        document.getElementById('userGuessNumber').innerText = "Congrats!"
    } else if (playerGuess > magicNumber) {
        document.getElementById('userGuessNumber').innerText = "You guessed too high"
    } else if (playerGuess < magicNumber) {
        document.getElementById('userGuessNumber').innerText = "You guessed too low"
    }
}