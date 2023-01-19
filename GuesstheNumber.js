const randomNumber = Math.floor(Math.random() * 100) + 1;
console.log(randomNumber);
let score = 100;
let userGuess = prompt("Please enter your guess: ");
userGuess = Number.parseInt(userGuess)

do {
    if (userGuess > randomNumber) {
        userGuess = prompt("Please enter a lower number: ");
        userGuess = Number.parseInt(userGuess)
        score--;
    } else if (userGuess < randomNumber) {
        userGuess = prompt("Please enter a higher number: ");
        userGuess = Number.parseInt(userGuess)
        score--;
  }
} while (userGuess != randomNumber);
console.log("You made a correct guess. Your score is " + score);