const randomNumber = parseInt(Math.random() * 1000 + 1);
console.log(randomNumber);
const guessButton = document.getElementById("guessButton");
const result = document.getElementById("result");
const triesLeft = document.getElementById("triesLeft");
const numbers = document.getElementById("numbers");
const playAgain = document.getElementById("playAgain");
var tries = 10;

guessButton.addEventListener("click", guessGame);

playAgain.addEventListener("click", () => location.reload());

function guessGame () {
    let guessInput = document.getElementById("guess").value;
    numbers.innerHTML += ` ${guessInput} / `;
    if (tries == 1){
        result.innerHTML = `Suas tentativas acabaram...O número secreto era ${randomNumber}.</span>`;
        triesLeft.innerHTML = "Tentativas restantes: 0";
        guessButton.style.display = "none";
        playAgain.style.display = "inline";
    } else if (guessInput > randomNumber){
        result.innerHTML = `Ops...Você errou. O número secreto é menor do que ${guessInput}.</span>`;
        takeTry();
    } else if (guessInput < randomNumber) {
        result.innerHTML = `Ops...Você errou. O número secreto é maior do que ${guessInput}.`;
        takeTry();
    } else {
        result.innerHTML = `Parabéns, você acertou!!! O número secreto é ${randomNumber}.`;
    }
}

function takeTry () {
    tries--;
    triesLeft.innerHTML = `Tentativas restantes: ${tries}</span>`;
}