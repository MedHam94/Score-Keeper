// Declare variables

const p1Button = document.querySelector('#p1Button')
const p2Button = document.querySelector('#p2Button')
const p1Display = document.querySelector('#p1Display')
const p2Display = document.querySelector('#p2Display')
const resetBtn = document.querySelector('#reset')
const winningScoreSelect = document.querySelector('#playto')
// initial Score
let p1Score = 0
let p2Score = 0
let winningScore = 3
let gameOver = false


// Player One
p1Button.addEventListener('click', () => {
    if (!gameOver) {
        p1Score++
        if (p1Score === winningScore) {
            gameOver = true
            p1Button.classList.add('is-light')
            p2Button.classList.add('is-light')
            p1Button.disabled = true
            p2Button.disabled = true
        }
        p1Display.textContent = p1Score

    }
})

// Player Two
p2Button.addEventListener('click', () => {
    if (!gameOver) {
        p2Score++
        if (p2Score === winningScore) {
            gameOver = true
            p1Button.classList.add('is-light')
            p2Button.classList.add('is-light')
            p1Button.disabled = true
            p2Button.disabled = true
        }
        p2Display.textContent = p2Score

    }

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