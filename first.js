let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
let computerScorePara = document.querySelector("#computer-score");
const gencompchoice = () => {
    const options = ["rock", "paper", "scissors"];
    const  randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

const drawGame = () => {
    console.log("game was draw.")
    msg.innerText = "game draw!";
}

const showWinner = (userwin, choiceID, compChoice) => {
    if (userwin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You win! ${choiceID} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        computerScore++;
        computerScorePara.innerText = computerScore;
        msg.innerText = `You lose! ${compChoice} beats ${choiceID}`;
        msg.style.backgroundColor = "red";
    }
}

const playGame = (choiceID) => {
    console.log("user choice =", choiceID);
    const compChoice = gencompchoice();
    console.log("comp choice = ", compChoice);

    if(choiceID === compChoice) {
        drawGame();
    } else{
        let userwin = true;
        if(choiceID === "rock") {
           userwin = compChoice === "paper" ? false : true;
        }
        else if(choiceID === "paper") {
            userwin = compChoice === "scissors" ? false : true;
        }
        else if(choiceID === "scissors") {
          userwin =  compChoice === "rock" ? false : true;
        }
        showWinner(userwin, choiceID, compChoice)
    }

}

choices.forEach((choice)=> {
     choice.addEventListener("click", () => {
        const choiceID = choice.getAttribute("id");
        console.log("choice was clicked", choiceID)
        playGame(choiceID)
    })
})