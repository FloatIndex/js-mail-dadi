let playerNumber = Math.floor(Math.random() * 6 + 1);
let computerNumber = Math.floor(Math.random() * 6 + 1);

document.getElementById('player-number').innerHTML = 'Il tuo numero è: ' + playerNumber;
document.getElementById('computer-number').innerHTML = 'Il numero del computer è: ' + computerNumber;

if (playerNumber > computerNumber) {
    document.getElementById('winner').innerHTML = 'Vinci tu!';
} else if (playerNumber < computerNumber) {
    document.getElementById('winner').innerHTML = 'Vince il computer!';
} else {
    document.getElementById('winner').innerHTML = 'Avete pareggiato!';
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