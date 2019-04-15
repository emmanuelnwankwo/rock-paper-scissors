let score = { player: 0, computer: 0, rounds: 0 };

const computerPlay = (selection = ["rock", "paper", "scissors"]) => {
    let choice = selection[Math.floor(Math.random() * selection.length)];
    return choice;
}

const playerPlay = (message) => {
    let choice = "";
    if (message === undefined || message === null)
        choice = prompt("Choose Rock, Paper, or Scissors by typing it in.").toLowerCase();
    else
        choice = prompt(message).toLowerCase();
    if (choice !== "rock" && choice !== "paper" && choice !== "scissors") {
        return playerPlay("Your input \"" + choice + "\" is invalid. Please enter Rock, Paper, or Scissors.");
    }
    return choice;
}
const playRound = (playerSelection, computerSelection) => {
    if (playerSelection == computerSelection) {
        return { winner: "none", message: "It's a tie!" };
    } else if (playerSelection == "rock") {
        if (computerSelection == "scissors") {
            return { winner: "player", message: "You win! Rock beats scissors" };
        } else {
            return { winner: "computer", message: "You lose! Paper beats rock" };
        }
    } else if (playerSelection == "paper") {
        if (computerSelection == "rock") {
            return { winner: "player", message: "You win! Paper beats rock" };
        } else {
            return { winner: "computer", message: "You lose! Scissors beat paper" };
        }
    } else if (playerSelection == "scissors") {
        if (computerSelection == "paper") {
            return { winner: "player", message: "You win! Scissors beat paper" };
        } else {
            return { winner: "computer", message: "You lose! Rock beats scissors" };
        }
    }
}

function updateScore(winner) {
    if (winner == "player")
        score.player += 1;
    else if (winner == "computer")
        score.computer += 1;

    score.rounds += 1;
    return true;
}

function finalResult() {
    let result;
    if (score.player > score.computer)
        result = "You won the game!";
    else if (score.player < score.computer)
        result = "The computer won the game!";
    else
        result = "It's a draw!";
    return result;
}

const game = () => {
    for (let i = 0; i < 5; i++) {
        let playerSelection = playerPlay();
        let computerSelection = computerPlay();
        let round = playRound(playerSelection, computerSelection);
        updateScore(round.winner);
        console.log(`message: ${round.message}, playerScore: ${score.player}, computerScore: ${score.computer}`);
    }
    return finalResult();

}
const button = document.querySelector("button");
button.addEventListener("click", game);