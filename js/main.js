let noOfTimes=0,computer=0,player=0;
const wrapper = document.getElementById('wrapper');

function computerPlay() {
    let x = Math.floor(Math.random() * 3);
    if (x == 0) {
        return "rock";
    }
    else if (x == 1) {
        return "paper";
    }
    else {
        return "scissor";
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection == computerSelection) {
        return -1;
    }
    else if (playerSelection == "rock") {
        if (computerSelection == "scissor") {
            return 1;
        }
        else {
            return 0;
        }
    }
    else if (playerSelection == "paper") {
        if (computerSelection == "rock") {
            return 1;
        }
        else {
            return 0;
        }
    }
    else {
        if (computerSelection == "paper") {
            return 1;
        }
        else {
            return 0;
        }
    }
}

function game(playerSelection,computerSelection) {
    const result=playRound(playerSelection, computerSelection);
    const paragraph = document.querySelector('#text');
    let you = document.querySelector('#you');
    let pc = document.querySelector('#pc');
    paragraph.innerText = "You played: "+playerSelection.toUpperCase()+"\nComputer Played: "+computerSelection.toUpperCase()
    if(result==1){
        player++;
        paragraph.innerText+="\nYAYY YOU WON!!!";
    }
    else if(result==0){
        computer++;
        paragraph.innerText+="\nYOU LOST :(";
    }
    else{
        paragraph.innerText+="\nIT WAS A DRAW!!!";
    }
    you.textContent = player;
    pc.textContent = computer;
    noOfTimes++;
    if(noOfTimes==5){
        paragraph.innerText = "The score after 5 games.";
        player=0;
        computer=0;
        noOfTimes=0;
    }
}



wrapper.addEventListener('click', (event) => {
    const isButton = event.target.nodeName === 'BUTTON';
    if (!isButton) {
        return;
    }
    const computerSelection = computerPlay();
    game(event.target.id,computerSelection);
})