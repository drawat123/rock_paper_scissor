function promptMe(){
    let playerSelection = prompt("Enter Rock,paper or scissor....");
    const computerSelection = computerPlay();
    console.log("You Played:" + playerSelection.toUpperCase() + " Computer Played:" + computerSelection.toUpperCase());
    console.log(playRound(playerSelection, computerSelection));
}

function computerPlay(){
    let x= Math.floor(Math.random() * 3);
    if(x==0){
        return "rock";
    }
    else if(x==1){
        return "paper";
    }
    else{
        return "scissor";
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if(playerSelection == computerSelection){
        return "IT WAS A DRAW!!!";
    }
    else if(playerSelection=="rock"){
        if(computerSelection=="scissor"){
            return "YAYY YOU WON!!!";
        }
        else{
            return "YOU LOST :(";
        }
    }
    else if(playerSelection=="paper"){
        if(computerSelection=="rock"){
            return "YAYY YOU WON!!!";
        }
        else{
            return "YOU LOST :(";
        }
    }
    else{
        if(computerSelection=="paper"){
            return "YAYY YOU WON!!!";
        }
        else{
            return "YOU LOST :(";
        }
    }
}

function game(){
    for(let i=0;i<5;i++){
        const playerSelection = 'rock'
        const computerSelection = computerPlay()
        playRound(playerSelection,computerSelection);
    }
}
