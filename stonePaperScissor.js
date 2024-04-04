let userScore = 0;
let compScore = 0;

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

// Use querySelectorAll to get all elements that match the selector as a NodeList
const choices = document.querySelectorAll(".choice");
const msg =document.querySelector("#msg");
const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const drawGame = ()=>{
    console.log("Game Draw.");
    msg.innerText="Game Draw, Play Again!";
};

const showWinner= (userWin)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText= userScore;
        console.log("You Win");
        msg.innerText="You Win";
        msg.style.backgroundColor = "green";
     } else{
        compScore++;
        compScorePara.innerText=compScore;
            console.log("You Loose");
            msg.innerText="You Loose";
            msg.style.backgroundColor = "red";
        }

    }

const playGame = (userChoice) => {
    console.log("user choice = ", userChoice);

    // Generate Computer choice
    const compChoice = genCompChoice();
    console.log("comp choice = ", compChoice);

     if(userChoice === compChoice){
        // Draw game
        drawGame();

     }
    else{
        let userWin = true;
        if(userChoice == "rock"){
            //  scissors, paper
            userWin = compChoice === "paper"? false:true;
        } else if(userChoice === "paper"){
            //rock,scissor
            userWin = compChoice === "scissors"? false:true;

        } else{
            //ock, paper
            userWin = compChoice ==="rock"?false:true;
        }
           showWinner(userWin);
    }
};

// Now, choices is a NodeList, and you can use forEach on it
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});