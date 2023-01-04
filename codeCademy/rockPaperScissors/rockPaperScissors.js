const getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase();
    
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
        return userInput;
    } else {
        console.log('Invalid choice');
    }
}

function getComputerChoice() {
    switch (Math.floor(Math.random() * 3)) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }
}

function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return 'The game is a tie!';
    } else if (userChoice === 'rock') {
        if (computerChoice === 'paper') {
            return 'The computer won!';
        } else {
            return 'You\'ve won!';
        }
    } else if (userChoice === 'paper') {
        if (computerChoice === 'scissors') {
            return 'The computer won!';
        } else {
            return 'You\'ve won!';
        }
    } else if (userChoice === 'scissors') {
        if (computerChoice === 'rock') {
            return 'The computer won!';
        } else {
            return 'You\'ve won!';
        }
    } else if (userChoice === 'bomb') {
        return 'You\'ve won by some margin!';
    }
}

function playGame() {
    let userChoice = getUserChoice('rock');
    console.log(`You chose ${userChoice}...`);

    let computerChoice = getComputerChoice();
    console.log(`The computer chose ${computerChoice}...`);

    console.log(determineWinner(userChoice, computerChoice));
}

playGame();