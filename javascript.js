let player = {
    name : "Reina",
    chips : 145
}
let cards = []
sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")

playerEl.textContent = player.name + " : " + "$" + player.chips

function getRandomCard() {
    let randonmNumber =  Math.floor(Math.random() * 13 /* 0.000 - 12.999*/) + 1 

    if (randonmNumber > 10){
        return 10
    }     
    else if (randonmNumber === 1){
        return 11
    }
    else {
        return randonmNumber
    }
}

function startGame () {
    isAlive = true
    
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard

    renderGame()
}

function renderGame (){
    //render out first and second card
    cardsEl.textContent = "Cards :"  

   for (let i = 0; i < cards.length; i ++) {
      cardsEl.textContent += cards[i] + " "
}
    // render out all the cards that we have
     sumEl.textContent = "Sum : " + sum
    if (sum <= 21) {  
        message = "Do you want to draw a new card?"
    } else if ( sum === 21) {
        message ="You've got a Blackjack!"
        hasBlackJack = true 
    } else {
        message =  " You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}

function newCard() {

   if (isAlive === true && hasBlackJack === false){
     let card = getRandomCard()
     sum += card
     cards.push (card)
     renderGame()
   }
}
