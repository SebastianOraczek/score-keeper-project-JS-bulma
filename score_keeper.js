const p1 = {
    score: 0,
    button: document.querySelector("#p1Button"),
    display: document.querySelector("#p1Display"),
    name: document.querySelector("#p1Input"),
}

const p2 = {
    score: 0,
    button: document.querySelector("#p2Button"),
    display: document.querySelector("#p2Display"),
    name: document.querySelector("#p2Input"),
}

const resetButton = document.querySelector("#reset");
const winningScoreSelect = document.querySelector("#playTo");
const winnerMsg = document.querySelector("#winnerMsg");
const changeButton = document.querySelector("#changeButton");
let winningScore = 3;
let isGameOver = false;


p1.button.addEventListener("click", function (event) {
    updateScores(p1, p2);
})

p2.button.addEventListener("click", function (event) {
    updateScores(p2, p1);
})

winningScoreSelect.addEventListener("change", function (event) {
    winningScore = parseInt(this.value);
    reset();
})

resetButton.addEventListener("click", reset)

changeButton.addEventListener("click", function (event) {
    p1.name.value = "";
    p2.name.value = "";
    reset();
})


function updateScores(player, opponent) {
    if (!isGameOver) {
        player.score++;
        if (player.score === winningScore) {
            isGameOver = true;
            player.display.classList.add("has-text-success");
            opponent.display.classList.add("has-text-danger");
            player.button.disabled = true;
            opponent.button.disabled = true;
            if (player.name.value) {
                winnerMsg.textContent = `Congrats to ${player.name.value}!`.toUpperCase();
            }
            else {
                winnerMsg.textContent = "Congratulation!".toUpperCase();
            }
        }
        player.display.textContent = player.score;
    }
}

function reset() {
    isGameOver = false;
    for (let p of [p1, p2]) {
        p.score = 0;
        p.display.textContent = 0;
        p.display.classList.remove("has-text-success", "has-text-danger");
        p.button.disabled = false;
        winnerMsg.innerText = "";
    }
}