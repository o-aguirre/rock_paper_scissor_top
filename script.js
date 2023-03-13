//variables globales
let contadorPlayer = 0;
let contadorComputer = 0;
const div = document.querySelector('.content');

//funcion jugada maquina
function getComputerChoice() {
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
};


//funcion que retorna un ganador
function playRound (maquina, jugador) {

    let jugadaMaquina = maquina();

    if (contadorComputer === 5){
        p.textContent = 'Sorry. Machines win!'
    } else if (contadorPlayer === 5) {
        p.textContent = 'You win!'
    } else if (jugador === 'piedra' && jugadaMaquina === 'tijera') {
        p.textContent = 'You win! Rock beats scissor';
        contadorPlayer += 1;
    } else if (jugador === 'piedra' && jugadaMaquina === 'papel') {
        p.textContent = 'You lose! Paper beats rock';
        contadorComputer += 1;
    } else if (jugador === 'piedra' && jugadaMaquina === 'piedra') {
        p.textContent = 'Draw';
    } else if (jugador === 'papel' && jugadaMaquina === 'piedra') {
        p.textContent = 'You win! Paper beats rock';
        contadorPlayer += 1;
    } else if (jugador === 'papel' && jugadaMaquina === 'papel') {
        p.textContent = 'Draw';
    } else if (jugador === 'papel' && jugadaMaquina === 'tijera') {
        p.textContent = 'You lose! Scissor beats paper';
        contadorComputer += 1;
    } else if (jugador === 'tijera' && jugadaMaquina === 'piedra') {
        p.textContent = 'You lose! Rock beats scissor';
        contadorComputer += 1;
    } else if (jugador === 'tijera' && jugadaMaquina === 'papel') {
        p.textContent = 'You win! Scissor beats paper';
        contadorPlayer += 1;
    } else if (jugador === 'tijera' && jugadaMaquina === 'tijera') {
        p.textContent = 'Draw';
    } else {
        console.log('Error ...something wrong')
    }
};

const btns = document.querySelectorAll('button');
btns.forEach(btn => btn.addEventListener('click', () => playRound(getComputerChoice, btn.id)))

const p = document.createElement('p');
div.appendChild(p)

//funcion bucle que llama otras funciones y se repite 5 veces
// function game () {
    
//     if(contadorPlayer > contadorComputer) {
//         console.log('Has ganado')
//     } else if (contadorPlayer < contadorComputer) {
//         console.log('Has perdido')
//     } else {
//         console.log('Has empatado')
//     }
// }



//game()