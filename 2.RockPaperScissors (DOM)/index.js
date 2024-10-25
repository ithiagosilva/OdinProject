let scorePlayer = document.getElementById('player-score')
let scoreComp = document.getElementById('computer-score')
let gameResult = document.getElementById('game-result')
let pedra = document.querySelector('#pedra')

let humanScore = 0;
let computerScore = 0;
let humanChoice;
let computerChoice;
let playerImg;
let compImg;

pedra.addEventListener("click", () => {
    humanChoice = '1'
    playGame();
})

let papel = document.querySelector('#papel')
papel.addEventListener("click", () => {
    humanChoice = '2'
    playGame();
})

let tesoura = document.querySelector('#tesoura')
tesoura.addEventListener("click", () => {
    humanChoice = '3'
    playGame();
})


function playGame() {
    if (document.querySelector('.maozinha-comp') && document.querySelector('.maozinha-user')) {
        document.querySelector('.maozinha-comp').remove()
        document.querySelector('.maozinha-user').remove()
    } 

    function getComputerChoice() {
        computerChoice = Math.ceil(Math.random() * 3);
        if (computerChoice === 1) {
            computerChoice = 'Pedra'
            compImg = document.getElementById('computer').appendChild(document.createElement("img"))
            compImg.setAttribute("src", "./assets/pedra.png")
            document.querySelector("img").classList.add('left-img', 'maozinha-comp')
            
        } else if (computerChoice === 2) {
            computerChoice = 'Papel'
            compImg = document.getElementById('computer').appendChild(document.createElement("img"))
            compImg.setAttribute("src", "./assets/papel.png")
            document.querySelector("img").classList.add('left-img', 'maozinha-comp')
            
        } else {
            computerChoice = 'Tesoura'
            compImg = document.getElementById('computer').appendChild(document.createElement("img"))
            compImg.setAttribute("src", "./assets/tesoura.png")
            document.querySelector("img").classList.add('left-img', 'maozinha-comp')
            
        }

        
    }

    getComputerChoice();

    function getHumanChoice() {
        if (humanChoice === '1') {
            humanChoice = 'Pedra'
            playerImg = document.getElementById('player').appendChild(document.createElement("img"))
            playerImg.setAttribute("src", "./assets/pedra.png")
            document.querySelector('img').classList.add('maozinha-user')
        } else if (humanChoice === '2') {
            humanChoice = 'Papel'
            playerImg = document.getElementById('player').appendChild(document.createElement("img"))
            playerImg.setAttribute("src", "./assets/papel.png")
            document.querySelector('img').classList.add('maozinha-user')
        } else {
            humanChoice = 'Tesoura'
            playerImg = document.getElementById('player').appendChild(document.createElement("img"))
            playerImg.setAttribute("src", "./assets/tesoura.png")
            document.querySelector('img').classList.add('maozinha-user')
        }
    }

    getHumanChoice();


    function playRound() {

        if ((humanChoice === 'Pedra' && computerChoice === 'Tesoura') || (humanChoice === 'Papel' && computerChoice === 'Pedra') || (humanChoice === 'Tesoura' && computerChoice === 'Papel')) {
            humanScore += 1
            scorePlayer.innerText=humanScore
            return gameResult.innerText=`Você GANHOU, ${humanChoice} ganha de ${computerChoice}`
            
        } else if (humanChoice === computerChoice) {
            return gameResult.innerText=`EMPATE, vocês dois escolheram ${humanChoice}`
            
        } else {
            computerScore += 1;
            scoreComp.innerText=computerScore
            return gameResult.innerText=`Você perdeu, ${computerChoice} ganha de ${humanChoice}`
        }
        
    }

    playRound();

}



