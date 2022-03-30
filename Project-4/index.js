let player = { 
    name: "Ramanan",
    chips : 200
}
let cardArray = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageEl = document.querySelector("#message-el");
let sumEl = document.querySelector("#sum-el");
let cardEl = document.querySelector("#card-el");
let playerEl = document.querySelector("#player-el");

    playerEl.textContent = player.name + " : $" + player.chips;
function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1;
    if (randomNumber === 1) {
        randomNumber = 11;
    } else if (randomNumber > 10 ) {
        randomNumber = 10;
    } else {
        randomNumber;
    }
    return randomNumber;
}

function startGame() {
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cardArray = [firstCard, secondCard];
    sum = cardArray[0] + cardArray[1];
    renderGame()
}

function renderGame() {
    cardEl.textContent = "Cards: ";
    for (let i = 0; i < cardArray.length; i++) {
         cardEl.textContent += cardArray[i] + ' ';
    }
    
    sumEl.textContent = "Sum: " + sum;

    if (sum === 21) {
        message = "You got black jack";
    } else if (sum > 21) {
        message = "You are out of the game"
    } else {
        message = "You are still in the game";
    }
    messageEl.textContent = message;
}

function newCard() {
    if (sum >= 21 ) {
        isAlive = false;
    }
    if (isAlive === true && hasBlackJack === false) {
        let thirdCard = getRandomCard();
        cardArray.push(thirdCard);
        sum += thirdCard;
        renderGame();
    }
}