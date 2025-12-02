// Rock Paper Scissors Game

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
        console.log('You won! Rock beats Scissors!')
        playerScore++;
    }
    else if(h === 'Rock' && c === 'Paper'){
        console.log('You lost! Rock beats Scissors!')
        compScore++;
    }
    //scissors
    else if(h === 'Scissors' && c === 'Rock'){
        console.log('You lost! Rock beats Scissors!')
        compScore++;
    }
    else if(h === 'Scissors' && c === 'Paper'){
        console.log('You won! Scissors beats Paper!')
        playerScore++;
    }
    //paper
    else if(h === 'Paper' && c === 'Scissors'){
        console.log('You lost! Scissors beats Paper!')
        compScore++;
    }
    else if(h == 'Paper' && c == 'Rock'){
        console.log('You won! Paper beats Rock!')
        playerScore++;
    }
    else{
        console.log('You tied!')
    }
    
}


//call play round multiple times and identifies a winner
function playGame(){

    
    //call playRound() 5 times
    for(i = 0; i < 5; i++){
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);
    }

    //check for win or loss
    if(playerScore > compScore){
        console.log('You Win');
    }
    else if(playerScore < compScore){
        console.log('You Lose');
    }
    else{
        console.log('You Tied');
    }
}

playGame();




