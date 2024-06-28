let userScore = 0;
let compScore = 0;

let choices =  document.querySelectorAll(".choice");
let printResult = document.querySelector(".printMsg");
const genCompChoice =()=>{
    const options = ["roock","paper","scissors"];
    const ramdomIdx= Math.floor(Math.random()*3);
    return options[ramdomIdx];
}
const playgame =(userChoice)=>{
    console.log("user choice = ",userChoice);
    const compChoice = genCompChoice();
    console.log("comp choice = ",compChoice);
    if(userChoice===compChoice){
        printResult.innerText = "It's a Draw";

    }
 }
choices.forEach((choice)=>{
    let userChoice = choice.getAttribute("id");
    choice.addEventListener("click",()=>{
    
        playgame(userChoice);
    })
    
})







