'use strict';

let guessButton = document.querySelector('.check');
let number = document.querySelector('.number');
let againBtn = document.querySelector('.again');
let bckg = document.querySelector('body');
let currScore = document.querySelector('.score');
let guessInput = document.querySelector('.guess');
let scoreResult = document.querySelector('.highscore');

let findNumber = 1 + Math.trunc(Math.random() * 20);
let score = 20, highScore= 0;


function displayMessage(message) {
    document.querySelector('.message').textContent = message
}

function startGame() {
    const inputNumber = Number(guessInput.value);
    
    // when there is no input
    if(!inputNumber) {
        displayMessage('Not a number!')
        //when the guess is right
    } else if(inputNumber === findNumber) {
        displayMessage('Correct Number!');
        bckg.style.background = '#60b347'
        number.style.width = '30rem'
        number.textContent = findNumber
        guessButton.disabled = false;
        if(score > highScore) {
            highScore = score;  
            scoreResult.textContent = highScore
        }
    } else if(inputNumber !== findNumber) {
        if(score > 1) {
            displayMessage(inputNumber > findNumber ? 'Too high' : 'Too low');
            score--;
            currScore.textContent = score;
            guessInput.value = '';
        } else {
            displayMessage('you lost the game');
            currScore.textContent = '0'
        }
    }   
}

guessButton.addEventListener('click', startGame)
guessInput.addEventListener('keypress', (e) => {
    if(e.keyCode === 13) {
        startGame();
    }
})

againBtn.addEventListener('click', function() {
    score = 20;
    findNumber = 1 + Math.trunc(Math.random() * 20);

    currScore.textContent = score;
    displayMessage('Start guessing...');
    bckg.style.background = '#222';
    number.textContent = '?';
    guessInput.value = '';
    number.style.width = '15rem'
});