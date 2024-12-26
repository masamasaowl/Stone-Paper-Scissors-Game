// =================== DOM =======================
let info = document.querySelector("h3");
let message = document.querySelector(".message");
let boxes = document.querySelectorAll(".box");
// let rock = document.querySelector(".rock");
// let paper = document.querySelector(".paper");
// let scissors = document.querySelector(".scissors");
let userScore = document.querySelector(".userScore");
let compScore = document.querySelector(".compScore");


let uScore = 0;
let cScore = 0;

// =================== comp moves ===============
const randomChoice = () => {
    // one of rock paper scissors
    let choices = ["rock","paper","scissors"];

    // generate random number
    let randomNum = Math.floor(Math.random() * 3);

    return(choices[randomNum]);
};



// =================== user moves ================
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log(`box was clicked`);

        info.classList.add("hidden")

        let userChoice = box.getAttribute("id");
        
        // the game begins
        playGame(userChoice);
    });
});


const playGame = (userChoice) => {
    console.log(`user choice : ${userChoice}`);
    
    let compChoice = randomChoice();
    console.log(`comp choice : ${compChoice}`);
    

    // a complex if else using ternary to shorten the length
    if(userChoice === compChoice){
        // Draw game
        drawGame();

    } else{

        // assume user as already won
        let userWin = true;
        if(userChoice === "rock"){
            // if scissors lose
            // if paper win
            userWin = compChoice === "paper" ? false : true;

        } else if (userChoice === "paper") {
            // rock,scissors
            userWin = compChoice === "scissors"? false : true;

        }else{
            // rock, paper
            userWin = compChoice === "rock"? false : true;
        }

        // showcase the winner
        showWinner(userWin, userChoice, compChoice);
    }
};


const drawGame = () => {
    message.innerText = "It's a draw! Pick again";
    // console.log("Game was draw");
};

const showWinner = (userWin, userChoice, compChoice) => {
    message.classList.add("oregano-regular", "msg")
    if(userWin){
        message.innerText = `You win! ${userChoice} beats ${compChoice} `;
        uScore++;
        userScore.innerText = uScore;

    } else{
        message.innerText = `The computer chose ${compChoice}, no wories, you can try again`;
        cScore++;
        compScore.innerText = cScore;
    }
};


// ======================= THANK YOU SO MUCH SHRADDHA MA'AM WITH YOUR HELP ANOTHER PROJECT IS NOW COMPLETE =========================