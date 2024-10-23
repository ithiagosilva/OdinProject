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
            humanChoice = prompt('Digite sua opção: \n[1] Pedra \n[2] Papel \n[3] Tesoura: ')
        }

        function getComputerChoice() {
            computerChoice = Math.ceil(Math.random() * 3);
            if (computerChoice === 1) {
                return computerChoice = 'Pedra'
            } else if (computerChoice === 2) {
                return computerChoice = 'Papel'
            } else {
                return computerChoice = 'Tesoura'
            }
        }

        getComputerChoice();

        function getHumanChoice() {
            if (humanChoice === '1') {
                return humanChoice = 'Pedra'
            } else if (humanChoice === '2') {
                return humanChoice = 'Pepel'
            } else {
                return humanChoice = 'Tesoura'
            }
        }

        getHumanChoice();


        function playRound(humanChoice, computerChoice) {
            if ((humanChoice === 'Pedra' && computerChoice === 'Tesoura') || (humanChoice === 'Papel' && computerChoice === 'Pedra') || (humanChoice === 'Tesoura' && computerChoice === 'Papel')) {
                humanScore = humanScore + 1;
                computerScore = computerScore;
                return `Você GANHOU, ${humanChoice} ganha de ${computerChoice}`
            } else if (humanChoice === computerChoice) {
                humanScore = humanScore;
                computerScore = computerScore;
                return `EMPATE, vocês dois escolheram ${humanChoice}`
            } else {
                humanScore = humanScore;
                computerScore = computerScore + 1;
                return `Você perdeu, ${computerChoice} ganha de ${humanChoice}`
            }

        }
        alert(playRound(humanChoice, computerChoice) + '\nSua pontuação: '+ humanScore + '\nPontuação da casa: '+ computerScore);
    vCont = vCont + 1;
    }


    let resultRound;
    if (computerScore > humanScore) {
        resultRound = 'PERDEU';
    } else if (humanScore > computerScore) {
        resultRound = 'GANHOU'; 
    } else {
        resultRound = 'EMPATOU'
    }
    alert(`Você ${resultRound} esse jogo! \nSua pontuação: ${humanScore} \nPontuação da casa: ${computerScore}`)

    vContinuar = prompt('Quer jogar de novo? S/n: ').toUpperCase()
    if (vContinuar === '') {
        vContinuar = 'S'
    }
    while (vContinuar !== 'S' && vContinuar !== 'N') {
        vContinuar = prompt('Por favor digite um valor válido (s/n) \nQuer jogar de novo? S/n: ').toUpperCase()
        if (vContinuar === '') {
            vContinuar = 'S'
        }
    }
    if (vContinuar === 'S') {
        let rounds = prompt('Quantos rounds deseja jogar? ')
        playGame(rounds);
    } else {
        alert('Obrigado por jogar!')
    }

}
