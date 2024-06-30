let userScore = 0;
let compScore = 0;

let choices = document.querySelectorAll(".choice");
let printResult = document.querySelector(".printMsg");
const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const ramdomIdx = Math.floor(Math.random() * 3);
    return options[ramdomIdx];
}
const playgame = (userChoice) => {
    console.log("user choice = ", userChoice);
    const compChoice = genCompChoice();
    console.log("comp choice = ", compChoice);
    if (userChoice === compChoice) {
        printResult.innerHTML = "It's a Draw";
        return;
    }
    let userWin = true;
    if (userChoice == "rock") {
        userWin = compChoice == "paper" ? false : true;
    }
    else if (userChoice == "paper") {
        userWin = compChoice == "scissors" ? false : true;
    }
    else if (userChoice == "scissor") {
        userWin = compChoice == "rock" ? false : true;
    }
    else{
        userWin=false;
    }
    if(userWin){
        printResult.innerHTML = "I Win";
        userScore++;
        document.getElementById("yourScore").innerHTML = userScore;
    }
    else {
        printResult.innerHTML = "Computer Win";
        compScore++;
        document.getElementById("compScore").innerHTML = compScore;
    }
    
 }
choices.forEach((choice) => {
    let userChoice = choice.getAttribute("id");
    choice.addEventListener("click", () => {

        playgame(userChoice);
    })

})







