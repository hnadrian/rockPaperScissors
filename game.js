function computerPlay() {
    var moves = ["Rock", "Paper", "Scissors"];
    return moves[Math.floor(Math.random() * moves.length)];
  }

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

  function game() {
    console.log("ROCK PAPER SCISSORS GAME");
    for (var i = 0; i < 5; i ++) {
      let playerSelection = prompt("Enter your move (Rock, Paper or Scissors): ");
      let computerSelection = computerPlay();
      console.log("Computer move is " + computerSelection + ".");
      console.log(singleRoundResult(computerSelection, playerSelection));
      console.log("----------");
    }
  }
  game();