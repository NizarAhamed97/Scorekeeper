const p1Display = document.querySelector('#p1display')
const p2Display = document.querySelector('#p2display')
const p1Button = document.querySelector('#p1button')
const p2Button = document.querySelector('#p2button')
const reset = document.querySelector('#reset')
let p1Score = 0;
let p2Score = 0;
let winningScore = 3;
let winningScoreSelect = document.querySelector('#winningscore');
let isGameOver = true;

winningScoreSelect.addEventListener('change', function () {
    winningScore = parseInt(this.value)
    resetValue();
})
p1Button.addEventListener("click", function () {
    if (isGameOver) {
        p1Score += 1;
        p1Display.textContent = p1Score;
        if (p1Score === winningScore) {
            p1Display.classList.add('text-success')
            p2Display.classList.add('text-danger')
            isGameOver = false;
        }
    }
})
p2Button.addEventListener("click", function () {
    if (isGameOver) {
        p2Score += 1;
        p2Display.textContent = p2Score;
        if (p2Score === winningScore) {
            p2Display.classList.add('text-success')
            p1Display.classList.add('text-danger')
            isGameOver = false;
        }
    }
})

reset.addEventListener('click', resetValue)

function resetValue() {
    p1Score = 0;
    p2Score = 0;
    isGameOver = true;
    p1Display.textContent = '0';
    p2Display.textContent = '0';
    p2Display.classList.remove('text-success', 'text-danger')
    p1Display.classList.remove('text-success', 'text-danger')
}

