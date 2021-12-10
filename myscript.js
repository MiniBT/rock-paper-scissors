function computerPlay() {
    let num = Math.floor(Math.random() * 3);
    if (num === 0){
        return "rock";
    }
    else if (num === 1){
        return "paper";
    }
    else {
        return "scissors"
    }
}

function playRound(playerChoice, computerChoice){
    if (playerChoice === computerChoice) {
        updateTie();
    }
    else if (playerChoice === "rock" && computerChoice === "scissors") {
        updateWin();
    }
    else if (playerChoice === "paper" && computerChoice === "rock") {
        updateWin();
    }
    else if (playerChoice === "scissors" && computerChoice === "paper") {
        updateWin();
    }
    else {
        updateLose();
    }
    if (playerScore == 5 || computerScore == 5){
        endGame(playerScore, computerScore);
    }

}

function updateWin(){
    playerScore++
    results.innerHTML = `You Win! <br><br>
    Player: ${playerScore} <br>
    Computer: ${computerScore}`;
}

function updateLose(){
    computerScore++
    results.innerHTML = `You Lose! <br><br>
    Player: ${playerScore} <br>
    Computer: ${computerScore}`;
}

function updateTie(){
    results.innerHTML = `You Tied! <br><br>
    Player: ${playerScore} <br>
    Computer: ${computerScore}`;
}

function endGame(playerScore, computerScore){
    const div = document.createElement('div');
    if (playerScore == 5) {
        div.textContent = "Congrats, you Win. Please refresh to play again"
    }
    else {
        div.textContent = "Sorry, you lost. Please refresh to try again"
    }
    body.appendChild(div);
    buttons.forEach((button) => {
        button.disabled = true;
    })
}

const results = document.querySelector('#result');
const buttons = document.querySelectorAll('button');
const body = document.querySelector('body');

let playerScore = 0;
let computerScore = 0;


buttons.forEach((button) => {
    button.addEventListener('click', () => {
        let playerSelection = button.value;
        let computerChoice = computerPlay();
        console.log(playRound(playerSelection, computerChoice));
    })
})