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
                    console.log(humanChoice+" won over "+computerChoice+" human gets a point");
                    humanScore++;
    } else{
        console.log(computerChoice+" won over "+humanChoice+" computer gets a point");
        computerScore++; 
        }
    }
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
}
for(let i=0;i<5;i++){
    playGame();
}
let finalhumanscore = humanScore;
let finalComputerscore = computerScore;
console.log("Final Score: Human-"+finalhumanscore+", Computer-"+finalComputerscore);
if(finalComputerscore===finalhumanscore){
    console.log("It's a Tie.Both will share the trophy");
}
else if(finalhumanscore>finalComputerscore){
    console.log("Human won the game by "+(finalhumanscore-finalComputerscore)+" points.");
}
else{
     console.log("Computer won the game by = "+(finalComputerscore-finalhumanscore)+" points");
}
