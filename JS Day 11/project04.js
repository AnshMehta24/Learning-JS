let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput  = document.querySelector('#guessfield');
const guesses = document.querySelector('.guesses');
const remaining = document.querySelector('.remaining');
const lowhigh = document.getElementsByClassName('low&High')
const startOver = document.querySelector('result');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if(playGame){
    submit.addEventListener('click', (e)=>{
        e.preventDefault();
        const guess = parseInt(userInput.value);
        console.log(guess);
        validateGuess(guess);
    });
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert('Please enter a number');
    }else if(guess < 1){
        alert('Enter number more than 1');
    }else if(guess > 100){
        alert('Enter number less than 100');
    }else{
        prevGuess.push(guess);
        if(numGuess ===11){
            displayGuess(guess);
            displayMessage(`Game Over. Random Number was ${randomNumber}`);
            endGame();
        }else{
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess){
    if(guess === randomNumber){
        displayMessage(`You Guessed It Right`);
        endGame();
    }else if (guess < randomNumber){
        displayMessage(`Number is to Low`)
    }else if(guess > randomNumber){
        displayMessage(`Number is to High`)
    }
}

function endGame(guess){
    userInput.value = '';
    userInput.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame">Start a new Game</h2>`;
    startOver.appendChild(p);
    playGame = flase;
    newGame();
}

function displayGuess(guess) {
    userInput.value = '';
    guesses.innerHTML += `${guess}, `;
    numGuess++;
    remaining.innerHTML = `${11 - numGuess} `;
  }

  function displayMessage(message) {
    lowhigh.innerHTML = `<h2  style="font-size: 30px; color: red;">${message}</h2>`;
  }

  function newGame() {
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', function (e) {
      randomNumber = parseInt(Math.random() * 100 + 1);
      prevGuess = [];
      numGuess = 1;
      guessSlot.innerHTML = '';
      remaining.innerHTML = `${11 - numGuess} `;
      userInput.removeAttribute('disabled');
      startOver.removeChild(p);
  
      playGame = true;
    });
  }