function startGame() {
    let rounds = prompt('Informe quantos rounds deseja jogar: ')
    playGame(rounds)
}

function playGame(rounds) {
    let humanScore = 0;
    let computerScore = 0;
    let vCont = 0;
    while (vCont < rounds) {
        let humanChoice;
        let computerChoice;

        while (humanChoice !== '1' && humanChoice !== '2' && humanChoice !== '3') {
            humanChoice = prompt('Digite sua opção: \n[1] Rock \n[2] Paper \n[3] Scissors: ')
        }

        function getComputerChoice() {
            computerChoice = Math.ceil(Math.random() * 3);
            if (computerChoice === 1) {
                return computerChoice = 'Rock'
            } else if (computerChoice === 2) {
                return computerChoice = 'Paper'
            } else {
                return computerChoice = 'Scissors'
            }
        }

        getComputerChoice();

        function getHumanChoice() {
            if (humanChoice === '1') {
                return humanChoice = 'Rock'
            } else if (humanChoice === '2') {
                return humanChoice = 'Paper'
            } else {
                return humanChoice = 'Scissors'
            }
        }

        getHumanChoice();


        function playRound(humanChoice, computerChoice) {
            if ((humanChoice === 'Rock' && computerChoice === 'Scissors') || (humanChoice === 'Paper' && computerChoice === 'Rock') || (humanChoice === 'Scissors' && computerChoice === 'Paper')) {
                humanScore = humanScore + 1;
                computerScore = computerScore;
                return `You WIN, ${humanChoice} beats ${computerChoice}`
            } else if (humanChoice === computerChoice) {
                humanScore = humanScore;
                computerScore = computerScore;
                return `It's DRAW, you both play ${humanChoice}`
            } else {
                humanScore = humanScore;
                computerScore = computerScore + 1;
                return `You LOSE, ${computerChoice} beats ${humanChoice}`
            }

        }
        alert(playRound(humanChoice, computerChoice) + '\nHuman score: '+ humanScore + '\nComputer score: '+ computerScore);
    vCont = vCont + 1;
    }


    let resultRound;
    if (computerScore > humanScore) {
        resultRound = 'LOSE';
    } else if (humanScore > computerScore) {
        resultRound = 'WIN'; 
    } else {
        resultRound = 'both DRAW'
    }
    alert(`You ${resultRound} this game! \nYour Score: ${humanScore} \nComputer Score: ${computerScore}`)

    vContinuar = prompt('Do you want to play again? Y/n: ').toUpperCase()
    if (vContinuar === '') {
        vContinuar = 'Y'
    }
    while (vContinuar !== 'Y' && vContinuar !== 'N') {
        vContinuar = prompt('PLEASE TYPE A VALID VALUE (y/n) \nDo you want to play again? Y/n: ').toUpperCase()
        if (vContinuar === '') {
            vContinuar = 'Y'
        }
    }
    if (vContinuar === 'Y') {
        let rounds = prompt('Quantos rounds deseja jogar? ')
        playGame(rounds);
    } else {
        alert('Obrigado por jogar!')
    }

}
