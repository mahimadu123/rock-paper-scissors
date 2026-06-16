function playGame(playerMove){
    const computerGuess = pickComputerMove(); 
    let result = "";

    if(playerMove === 'scissor'){
        if(computerGuess === 'paper'){
            result = "You Win";
        }
        else if(computerGuess === 'scissor'){
            result = "Tie";
        }
        else if(computerGuess === 'rock'){
            result = "You Lose";
        }
    }

    else if(playerMove === 'rock'){
        if(computerGuess === 'paper'){
            result = 'You Lose';
        }
        else if(computerGuess === 'rock'){
            result = 'Tie';
        }
        else if(computerGuess === 'scissor'){
            result = 'You Win';
        }
    }

    else if(playerMove === 'paper'){ 
        if(computerGuess === 'rock'){
            result = 'You Win';
        }
        else if(computerGuess === 'paper'){
            result = 'Tie';
        }
        else if(computerGuess === 'scissor'){
            result = 'You Lose';
        }
    }
    
    alert(`You Picked ${playerMove}. Computer Picked ${computerGuess}. ${result}.`);
}

function pickComputerMove(){ 
    const randomNumber = Math.random();
    let computerGuess = "";
    
    if(randomNumber >= 0 && randomNumber < 1/3){
        computerGuess = "rock";
    }
    else if(randomNumber >= 1/3 && randomNumber < 2/3){
        computerGuess = "paper";
    }
    else if(randomNumber >= 2/3 && randomNumber <= 1){
        computerGuess = "scissor";
    }

    return computerGuess;
}