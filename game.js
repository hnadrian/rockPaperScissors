let userScore = 0;
let comScore = 0;

function singleRoundResult(computerSelection, playerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    let result = "No result.";
    if (computerSelection === playerSelection) {
      result = "Tie with" + " " + computerSelection + "."
    } else if (computerSelection === "paper") {
      if (playerSelection === "scissors") result = "You win! Scissors beat Paper.";
      else if (playerSelection === "rock") result = "You lose! Paper beats Rock.";
    } else if (computerSelection === "rock") {
      if (playerSelection === "paper") result = "You win! Paper beats Rock.";
      else if (playerSelection === "scissors") result = "You lose! Rock beats Scissors.";
    } else {
      if (playerSelection === "paper") result = "You lose! Scissors beat Paper.";
      else if (playerSelection === "rock") result = "You win! Rock beat Scissors.";
    }
    return result;
}

function playRound(e) {
  const computerSelection = computerPlay();
  let result = singleRoundResult(computerSelection, e.target.id);
  computerResult.textContent = "Computer move is: " + computerSelection;
  displayResult.textContent = result;
  if (result.startsWith("You win")) {
    userScore++;
  } else if (result.startsWith("You lose")) {
    comScore++;
  }
  scoreResult.textContent = `${userScore}-${comScore}`;
  if (userScore === 5) {
    winnerResult.textContent = "YOU ARE THE WINNER!";
    delayedReset();
  } else if (comScore === 5) {
    winnerResult.textContent = "THE COMPUTER IS THE WINNER!";
    delayedReset();
  }
}

function computerPlay() {
  var moves = ["Rock", "Paper", "Scissors"];
  return moves[Math.floor(Math.random() * moves.length)];
}

function reset() {
  userScore = 0;
  comScore = 0;
  computerResult.textContent = "Computer move is:";
  scoreResult.textContent = "0-0";
  displayResult.textContent = "";
  winnerResult.textContent = "";
}

function delayedReset() {
  setTimeout(reset, 2500);
}

const container = document.querySelector("#choices");
const displayResult = document.querySelector("#game-result");
const computerResult = document.querySelector("#computer-result");
const scoreResult = document.querySelector("#score-result");
const winnerResult = document.querySelector("#winner-result");
const userButtons = document.querySelectorAll(".player-move");
userButtons.forEach(button => button.addEventListener("click", playRound));
const resetButton = document.querySelector("#reset-button");
resetButton.addEventListener("click", reset);