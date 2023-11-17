// Declare variables
const p1 = {
    button :document.querySelector('#p1Button'),
    display: document.querySelector('#p1Display'),
    score:0
}

const p2 = {
    button :document.querySelector('#p2Button'),
    display: document.querySelector('#p2Display'),
    score:0
}

const p2Button = document.querySelector('#p2Button')
const resetBtn = document.querySelector('#reset')
const winningScoreSelect = document.querySelector('#playto')
// initial Score
let winningScore = 3
let gameOver = false


function updateScore(player,opponent){
    if (!gameOver) {
        player.score++
        if (player.score === winningScore) {
            gameOver = true
            player.button.classList.add('is-light')
            opponent.button.classList.add('is-light')
            player.button.disabled = true
            opponent.button.disabled = true
        }
        player.display.textContent = player.score

    }
}

// Player One
p1Button.addEventListener('click', () => {
    updateScore(p1,p2)
    
})

// Player Two
p2Button.addEventListener('click', () => {
    updateScore(p2,p1)

})

winningScoreSelect.addEventListener('change', function () {
    winningScore = parseInt(this.value);
    reset();
})

resetBtn.addEventListener('click', reset)

function reset() {
    p1Score = 0
    p2Score = 0
    p1Display.textContent = p1Score
    p2Display.textContent = p2Score

    p1Button.classList.remove('is-light')
    p2Button.classList.remove('is-light')
    gameOver = false
    p1Button.disabled = false
    p2Button.disabled = false
}