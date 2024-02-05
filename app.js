let userScore = 0;
let compScore = 0;

let msg = document.querySelector("#msg");

let choices = document.querySelectorAll(".choice");
let uScore = document.querySelector("#user-score");
let cScore = document.querySelector("#comp-score");

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    let userChoice = choice.getAttribute("id");

    playGame(userChoice);
  });
});

const playGame = (userChoice) => {
  //generating computer choice
  const compChoice = genCompChoice();

  if (userChoice === compChoice) {
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      //computer choice scissors , paper
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      //computer choice rock,scissors
      userWin = compChoice === "scissors" ? false : true;
    } else {
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};
const drawGame = () => {
  msg.innerText = "Game Was Draw. Play Again.";
  msg.style.backgroundColor = " #081b31";
};
const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
    userScore++;
    uScore.innerText = userScore;
    msg.style.backgroundColor = "green";
  } else {
    msg.innerText = `You Lose! ${compChoice} beats ${userChoice}`;
    compScore++;
    cScore.innerText = compScore;
    msg.style.backgroundColor = "red";
  }
};
const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  let randIndx = Math.floor(Math.random() * 3);
  return options[randIndx];
};
