function getComputerChoice(){
    let hello = Math.floor(Math.random()*3);
    if(hello === 0){
        return "rock";
    }
    else if(hello === 1){
        return "paper";
    }
    else{
        return "scissors";
    }
}

function getHumanChoice(){
    const validChoices = ['rock', 'paper', 'scissors'];
    
    
    let userChoice = prompt("Please enter your choice (rock, paper, or scissors):").toLowerCase();
    while (!validChoices.includes(userChoice)) {
        userChoice = prompt("Invalid choice. Please enter rock, paper, or scissors:").toLowerCase();
    }
    
    return userChoice;
}
let humanScore=0;
let computerScore=0;

function playGame(){
    function playRound(humanChoice, computerChoice){
        if(humanChoice===computerChoice){
            console.log("It's Tie");
        }
        else if((humanChoice==="rock"&&computerChoice==="scissors")||
                (humanChoice==="scissors"&&computerChoice==="paper")||
                (humanChoice==="paper"&&computerChoice==="rock")){
                    console.log("Human Won");
                    humanScore++;
    } else{
        console.log("Computer Won");
        computerScore++;
        }
    }
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    let finalhumanscore = humanScore;
let finalComputerscore = computerScore;
console.log("Final Score: Human-"+finalhumanscore+", Computer-"+finalComputerscore);
if(finalComputerscore===finalhumanscore){
    console.log("It's a Tie");
}
else if(finalhumanscore>finalComputerscore){
    console.log("Human Won the Game");
    }
    else{
        console.log("Computer Won the Game");
        }
}
for(let i=0;i<5;i++){
    playGame();
}
let finalhumanscore = humanScore;
let finalComputerscore = computerScore;
console.log("Final Score: Human-"+finalhumanscore+", Computer-"+finalComputerscore);
if(finalComputerscore===finalhumanscore){
    console.log("It's a Tie");
}
else if(finalhumanscore>finalComputerscore){
    console.log("Human Won the Game");
    }
    else{
        console.log("Computer Won the Game");
        }