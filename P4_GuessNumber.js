
let randomNumber= parseInt(Math.random()*100 + 1)
console.log(randomNumber);
const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.guessesRemaining');
const lowOrHigh = document.querySelector('.lowOrHigh');
const startOver = document.querySelector('.result');

const p=document.createElement('p');
//to show message like guesses right, too high/low

let prevGuess=[]
let numGuess=1;

let playGame=true

if (playGame){
    submit.addEventListener('click',function(e){
        e.preventDefault();

        const guess= parseInt(userInput.value)
        validateGuess( guess)
    })
}

function validateGuess(guess){
if (isNaN(guess)){
    alert("Please enter a number")
    
}
else if (guess<1 || guess>100){
    alert ("Enter a number between 1 and 100.")
}
else{
    prevGuess.push(guess)

    if (numGuess===11){
        displayGuess(guess)
        displayMessage(`Game Over. Random number was ${randomNumber}`)
        endGame()
    }
    else{
        displayGuess(guess)
        checkGuess(guess)
    }
}

}

function checkGuess(guess){
    if (guess === randomNumber){
        displayMessage(`You guessed it right`)
        endGame()
    }
    else if (guess<randomNumber){
        displayMessage(`number is too LOW`)
    }
    else if (guess > randomNumber){
        displayMessage(`number is too HIGH`)
    }

}

function displayGuess(guess) {
    userInput.value=''
    guessSlot.innerHTML += `${guess} , `
    numGuess++
     remaining.innerHTML = `${11 - numGuess} `;
     console.log(`3`);
}

function displayMessage(message){
    lowOrHigh.innerHTML = `<h2>${message}</h2>`;

}

function endGame(){
userInput.value=''
userInput.setAttribute('disabled','')
p.classList.add('button');
// Add the 'button' class to the 'p' element

p.innerHTML= `<h2 id="newGame">Start new Game</h2>`
startOver.appendChild(p)
playGame=false 
newGame()

}

function newGame(){
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener("click", (e)=>{
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML='';
    remaining.innerHTML = `${10} `;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);
    playGame=true
    })

}