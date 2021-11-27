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
    let newPlayerChoice = playerChoice.toLowerCase();
    if (newPlayerChoice === computerChoice) {
        return "It is a tie"
    }
    else if (newPlayerChoice === "rock"){
        if (computerChoice === "scissors") {
            return "You Win"
        }
        else{
            return "You Lose"
        }
    }
    else if (newPlayerChoice === "paper"){
        if (computerChoice === "rock") {
            return "You Win"
        }
        else{
            return "You Lose"
        }
    }
    else if (newPlayerChoice === "scissors"){
        if (computerChoice === "paper") {
            return "You Win"
        }
        else{
            return "You Lose"
        }
    }
}

function game (){
    for (let i = 0; i < 5; i++){
        let playerSelection = prompt("rock, paper, or scissors?");
        let computerChoice = computerPlay();
        console.log(playRound(playerSelection, computerChoice));
    }
}

game()