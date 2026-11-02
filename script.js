function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3);
  if (randomNumber === 0) {
    return "rock";
  } else if (randomNumber === 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

function getHumanChoice() {
  let humanChoice = prompt("Input your choice");
  if (humanChoice === null) {
    humanChoice = "";
  }
  return humanChoice;
}

function capitalize(str) {
  return str.slice(0, 1).toUpperCase() + str.slice(1);
}

function playGame() {
  let humanScore = 0,
    computerScore = 0;
  function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    if (
      (computerChoice === "rock" && humanChoice === "paper") ||
      (computerChoice === "paper" && humanChoice === "scissors") ||
      (computerChoice === "scissors" && humanChoice === "rock")
    ) {
      console.log(
        `You win! ${capitalize(humanChoice)} beats ${capitalize(computerChoice)}`,
      );
      humanScore++;
    } else if (
      (computerChoice === "paper" && humanChoice === "rock") ||
      (computerChoice === "scissors" && humanChoice === "paper") ||
      (computerChoice === "rock" && humanChoice === "scissors")
    ) {
      console.log(
        `You lose! ${capitalize(computerChoice)} beats ${capitalize(humanChoice)}`,
      );
      computerScore++;
    } else {
      console.log("Draw");
    }
  }
  for (let i = 0; i < 5; i++) {
    playRound(getHumanChoice(), getComputerChoice());
    console.log(`${humanScore} - ${computerScore}`);
  }
  if (humanScore > computerScore) {
    console.log("You have won this game!");
  } else if (computerScore > humanScore) {
    console.log("You have lost this game!");
  } else {
    console.log("This game is a draw!");
  }
}

playGame();
