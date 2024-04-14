const OPTIONS = ['Rock', 'Paper', 'Scissors'];


// Funtion to return computer random choice
function getComputerChoice() {
    const random = Math.floor(Math.random() * OPTIONS.length);
    return OPTIONS[random];
}


function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return 'Draw';
    } else if ((playerSelection === 'Rock' && computerSelection === 'Scissors') ||
            (playerSelection === 'Scissors' && computerSelection === 'Paper') ||
            (playerSelection === 'Paper' && computerSelection === 'Rock')) {
        return 'Player win!';
    } else {
        return 'Computer win!';
    }

}


let playerSelection = 'Rock';
let computerSelection = getComputerChoice()
console.log(computerSelection)
