// Rock Paper Scissors Game

//initialize buttons
let scissors = document.getElementById('scissors');
let rock = document.getElementById('rock');
let paper = document.getElementById('paper');

//initialize result
let result = document.getElementById("result");

//track computer score
let compScore = 0;

//track player score
let playerScore = 0;

function getComputerChoice(){
    // create a random variable from 1 to 3 inwhich each number is rock, paper or scissors
    let rand = Math.floor(Math.random() * 3);

    if(rand === 1) {
        return 'Rock';
    }
    else if(rand === 2) {
        return 'Paper'
    }
    else{
        return 'Scissors'
    }

}


    //human player 
    function getHumanChoice(){
        //prompt user for choice
        let choice = prompt('Enter rock, paper or scissors: ');
        let str = choice.charAt(0).toUpperCase();
        return str.concat(choice.toLowerCase().slice(1));
    }

function playRound(humanChoice, computerChoice) {

    let h = humanChoice;
    let c = computerChoice;
    // algorithm to see what beats what

    //rock
    if(h === 'Rock' && c === 'Scissors'){
        result.textContent = 'You won! Rock beats Scissors!';
        playerScore++;
    }
    else if(h === 'Rock' && c === 'Paper'){
        result.textContent = 'You lost! Rock beats Scissors!';
        compScore++;
    }
    //scissors
    else if(h === 'Scissors' && c === 'Rock'){
        result.textContent = 'You lost! Rock beats Scissors!';
        compScore++;
    }
    else if(h === 'Scissors' && c === 'Paper'){
        result.textContent = 'You won! Scissors beats Paper!';
        playerScore++;
    }
    //paper
    else if(h === 'Paper' && c === 'Scissors'){
        result.textContent = 'You lost! Scissors beats Paper!';
        compScore++;
    }
    else if(h == 'Paper' && c == 'Rock'){
        result.textContent = 'You won! Paper beats Rock!';
        playerScore++;
    }
    else{
        result.textContent = 'You tied!'
    }
    document.getElementById("player").textContent = "Player Score = " + playerScore;
    document.getElementById("computer").textContent = "Computer Score = " + compScore;

    if(playerScore >= 5 || compScore  >= 5){
    document.getElementById("buttons").remove();
    if(playerScore >= 5) result.textContent = 'You Win';
    else if(compScore >= 5) result.textContent = 'You Lost';
}
}





rock.addEventListener('click', () => playRound("Rock", getComputerChoice()));
paper.addEventListener('click', () => playRound("Paper", getComputerChoice()));
scissors.addEventListener('click', () => playRound("Scissors", getComputerChoice()));




