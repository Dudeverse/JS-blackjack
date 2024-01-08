let firstCard = 10
let secondCard = 4
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")

function startGame() {
    if (sum <= 20) {
        message = "Do you want to draw a new card? "
        console.log(message)
    } else if (sum === 21) {
        message = "You've got Blackjack! "
        hasBlackJack = true
        console.log(message)
    } else {
        message = "You're out of the game! "
        isAlive = false
        console.log(message)
    }
    messageEl.textContent = message
}

