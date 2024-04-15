const OPTIONS = ['Rock', 'Paper', 'Scissors'];
let buttons = document.querySelectorAll('button')
const container = document.querySelector('#container')
let playerSelection = '';
let pktComputer = 0, pktPlayer = 0


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
        pktPlayer += 1
        return `Player win! ${pktPlayer}`;
    } else {
        pktComputer += 1
        return `Computer win! ${pktComputer}`;
    }
}


buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playerSelection = button.textContent;
        result = playRound(playerSelection, getComputerChoice())
        container.textContent = result
        if (pktComputer === 5) {
            container.textContent = `Computer Win the game!`
            pktComputer = 0
        }
        if (pktPlayer === 5) {
            container.textContent = `Player Win the game!`
            pktPlayer = 0
        }

    })
})
