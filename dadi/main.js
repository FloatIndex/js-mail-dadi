function rollTheDice() {

    let playerNumber = Math.floor(Math.random() * 6 + 1);
    let computerNumber = Math.floor(Math.random() * 6 + 1);

    document.getElementById('player-number').innerHTML = 'Tu lanci ';
    document.getElementById('player-dice-face').innerHTML = '<img src="img/dice-face-' + playerNumber + '.png"></img>';
    document.getElementById('computer-number').innerHTML = 'Il computer lancia ';
    document.getElementById('computer-dice-face').innerHTML = '<img src="img/dice-face-' + computerNumber + '.png"></img>';


    if (playerNumber > computerNumber) {
        document.getElementById('winner').innerHTML = 'HAI VINTO!';
    } else if (playerNumber < computerNumber) {
        document.getElementById('winner').innerHTML = 'HAI PERSO';
    } else {
        document.getElementById('winner').innerHTML = 'PAREGGIO!';
    }
}

function visibleLayover() {

    document.getElementById("button-layover").style.visibility = "visible";

}

function hiddenLayover() {

    document.getElementById("button-layover").style.visibility = "hidden";
    
}

/* Gioco con due dadi

let playerNumbers = [Math.floor(Math.random() * 6 + 1), Math.floor(Math.random() * 6 + 1)];
let computerNumbers = [Math.floor(Math.random() * 6 + 1), Math.floor(Math.random() * 6 + 1)];
let playerSum = playerNumbers[0] + playerNumbers[1];
let computerSum = computerNumbers[0] + computerNumbers[1];

document.getElementById('player-number').innerHTML = 'I tuoi numeri sono: ' + playerNumbers[0] + ', ' + playerNumbers[1];
document.getElementById('computer-number').innerHTML = 'I numeri del computer sono: ' + computerNumbers[0] + ', ' + computerNumbers[1];

if (playerSum > computerSum) {
    document.getElementById('winner').innerHTML = 'Vinci tu!';
} else if (playerSum < computerSum) {
    document.getElementById('winner').innerHTML = 'Vince il computer!';
} else {
    document.getElementById('winner').innerHTML = 'Avete pareggiato!';
}

*/