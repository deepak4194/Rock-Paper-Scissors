const choices = document.querySelectorAll(".choice");
let userScore = 0;
let compScore = 0;
let msgPara = document.querySelector("#result");

const genComChoice = () => {
    const options = ["rock","paper","scissor"];
    let index = Math.floor(Math.random() *3);
    return options[index];
};

const gameDraw = () => {
    msgPara.style.backgroundColor = "blue";
    msgPara.style.color = "white";
};

const drawMsg = () => {
    msgPara.innerText = "Game is Draw";
};

const updateMsg = (userWin, userChoice, compChoice) => {
    if(userWin){
        msgPara.innerText = `You won!. Your ${userChoice} beats ${compChoice}`;
        msgPara.style.backgroundColor = "Green";
    } else{
        msgPara.innerText = `You lost!. ${compChoice} beats your ${userChoice}`;
        msgPara.style.backgroundColor = "Red";
    }
}

const updateScores = (userWin) => {
    if(userWin){
        userScore++;
        document.getElementById("user").innerText = userScore;
    } else{
        compScore++;
        document.getElementById("cmp").innerText = compScore;
    }
}

const playGame = (userChoice, compChoice) => {
    let userWin = true;
    if(userChoice === compChoice){
        gameDraw();
        drawMsg();
    } else if(userChoice === "rock"){
        userWin = compChoice === "paper" ? false : true; 
    } else if(userChoice === "scissor"){
        userWin = compChoice === "rock" ? false : true;
    } else {
        userWin = compChoice === "scissor" ? false : true;
    }
    if(userChoice !== compChoice){
        updateScores(userWin);
        updateMsg(userWin,userChoice,compChoice);
    }
};


choices.forEach((choice) => {
    choice.addEventListener("click",() => {
        let userChoice = choice.getAttribute("id");
        let compChoice = genComChoice();
        playGame(userChoice,compChoice);
    })
});

const reset = document.getElementById("reset");

function resetGame() {
  window.location.reload();
}

reset.addEventListener("click", resetGame);

