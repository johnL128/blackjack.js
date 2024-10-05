let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
//assign message to string to log it out
let message = ""
//store variable
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardEl = document.getElementById("card-el")

function startGame() {
    isAlive = true //boolean value to let system know user is there
    let firstCard = getRndCard()
    let secondCard = getRndCard()
    cards = [firstCard, secondCard] //array - ordered list of items
    sum = firstCard + secondCard
    renderGame()
}

function getRndCard() {
    let rng = Math.floor(Math.random()*13) + 1
    if (rng > 10){
        return 10
    } else if (rng === 1) {
        return 11
    } else {
        return rng
    }
}

function renderGame() {
    cardEl.textContent = "Cards: "
    for(i=0; i < cards.length; i++) {
        cardEl.textContent += cards [i] + " "
    }
    sumEl.textContent = "sum:" + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    }  else if (sum === 21) { //using "===" hard codes it to that limit, ignores strings. so "==" is less strict, therefore allows strings
        message = "WINNER!"
        hasBlackJack = true //boolean expression has now changed to true, this keeps track of the state of the player in the game
    }  else {
        message = "YOU LOSE!"
        isAlive = false
    }
    messageEl.textContent = message   
}

function newCard() {
    console.log("Drawing New Card!")
    let Card = getRndCard()
    sum += Card
    cards.push(Card)
    renderGame()
}