const choiceStr = ["rock", "paper", "scissors"];
const win = 1,
  draw = 0,
  lose = -1;
const judge = [];
for (let i = 0; i < 3; i++) {
  judge[i] = [];
  for (let j = 0; j < 3; j++) {
    if (
      (choiceStr[i] === "paper" && choiceStr[j] === "rock") ||
      (choiceStr[i] === "scissors" && choiceStr[j] === "paper") ||
      (choiceStr[i] === "rock" && choiceStr[j] === "scissors")
    ) {
      judge[i][j] = win;
    } else if (
      (choiceStr[i] === "rock" && choiceStr[j] === "paper") ||
      (choiceStr[i] === "paper" && choiceStr[j] === "scissors") ||
      (choiceStr[i] === "scissors" && choiceStr[j] === "rock")
    ) {
      judge[i][j] = lose;
    } else {
      judge[i][j] = draw;
    }
  }
}
function getComputerChoice() {
  return Math.floor(Math.random() * 3);
}
function capitalize(str) {
  return str.slice(0, 1).toUpperCase() + str.slice(1);
}

function playGame() {
  const container = document.querySelector(".container");
  container.textContent = "";
  let humanScore = 0,
    computerScore = 0;
  const controller = document.createElement("div");
  const display = document.createElement("div");
  const buttons = [];
  for (let i = 0; i < 3; i++) {
    buttons[i] = document.createElement("button");
    buttons[i].className = `${choiceStr[i]}-button`;
    buttons[i].textContent = capitalize(choiceStr[i]);
    buttons[i].addEventListener("click", () => {
      playRound(i, getComputerChoice());
    });
    controller.appendChild(buttons[i]);
  }
  container.appendChild(controller);
  container.appendChild(display);
  function displayUpdate(str) {
    const newElement = document.createElement("div");
    newElement.className = "message";
    newElement.textContent = str;
    display.appendChild(newElement);
  }
  function checkFinishedGame() {
    if (Math.max(humanScore, computerScore) === 5) {
      if (humanScore === 5) {
        displayUpdate("You have won this game!");
      } else {
        displayUpdate("You have lost this game!");
      }
      for (let i = 0; i < 3; i++) {
        buttons[i].disabled = true;
      }
      const resetButton = document.createElement("button");
      resetButton.className = "reset-button";
      resetButton.textContent = "Reset";
      resetButton.addEventListener("click", () => {
        playGame();
      });
      controller.appendChild(resetButton);
    }
  }
  function playRound(humanChoice, computerChoice) {
    if (judge[humanChoice][computerChoice] === win) {
      humanScore++;
      displayUpdate(
        `You win! ${capitalize(choiceStr[humanChoice])} beats ${capitalize(choiceStr[computerChoice])}\n${humanScore} - ${computerScore}`,
      );
    } else if (judge[humanChoice][computerChoice] === lose) {
      computerScore++;
      displayUpdate(
        `You lose! ${capitalize(choiceStr[computerChoice])} beats ${capitalize(choiceStr[humanChoice])}\n${humanScore} - ${computerScore}`,
      );
    } else {
      displayUpdate(`Draw!\n${humanScore} - ${computerScore}`);
    }
    checkFinishedGame();
  }
}

playGame();
