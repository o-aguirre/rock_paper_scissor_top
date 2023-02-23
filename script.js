//variables globales
let contadorPlayer = 0;
let contadorComputer = 0;
let playerSelection = null;

//funcion jugada maquina
const getComputerChoice = function() {
    let computerSelection = Math.floor(Math.random() * (3 - 1 + 1) + 1);
    switch (computerSelection) {
        case 1:
            computerSelection = 'piedra';
            break;
        case 2:
            computerSelection = 'papel';
            break;
        case 3:
            computerSelection = 'tijera';
            break;
    }
    return computerSelection;
}

//funcion que retorna un ganador
function playRound(playerSelection, getComputerChoice) {
    computerSelection = getComputerChoice();
    
    playerSelection = playerSelection.toLowerCase();
    console.log(computerSelection)

    if (playerSelection === 'piedra' && computerSelection === 'tijera') {
        console.log('You win! Rock beats scissor')
        contadorPlayer += 1;
    } else if (playerSelection === 'piedra' && computerSelection === 'papel') {
        console.log('You lose! paper beats rock')
        contadorComputer += 1;
    } else if (playerSelection === 'piedra' && computerSelection === 'piedra') {
        console.log('Draw')
    } else if (playerSelection === 'papel' && computerSelection === 'piedra') {
        console.log('You win! Paper beats rock')
        contadorPlayer += 1;
    } else if (playerSelection === 'papel' && computerSelection === 'papel') {
        console.log('Draw')
    } else if (playerSelection === 'papel' && computerSelection === 'tijera') {
        console.log('You lose! Scissor beats paper')
        contadorComputer += 1;
    } else if (playerSelection === 'tijera' && computerSelection === 'piedra') {
        console.log('You lose! Rock beats scissor')
        contadorComputer += 1;
    } else if (playerSelection === 'tijera' && computerSelection === 'papel') {
        console.log('You win! Scissor beats paper')
        contadorPlayer += 1;
    } else if (playerSelection === 'tijera' && computerSelection === 'tijera') {
        console.log('Draw')
    } else {
        console.log('Error ...something wrong')
    }

    console.log(`${contadorComputer} ... ${contadorPlayer}`)
} 

//funcion bucle que llama otras funciones y se repite 5 veces
function game () {
    for(let i = 1; i <= 5; i++) {
        playerSelection = prompt('ingrese su jugada');
        playRound(playerSelection, getComputerChoice)
    }
    if(contadorPlayer > contadorComputer) {
        console.log('Has ganado')
    } else if (contadorPlayer < contadorComputer) {
        console.log('Has perdido')
    } else {
        console.log('Has empatado')
    }
}

game()