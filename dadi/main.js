let playerNumbers = [Math.floor(Math.random() * 7 + 1), Math.floor(Math.random() * 7 + 1)];
let computerNumbers = [Math.floor(Math.random() * 7 + 1), Math.floor(Math.random() * 7 + 1)];
let playerSum = playerNumbers[0] + playerNumbers[1];
let computerSum = computerNumbers[0] + computerNumbers[1];

console.log('I tuoi numeri sono: ' + playerNumbers[0] + ', ' + playerNumbers[1]);
console.log('I numeri del computer sono: ' + computerNumbers[0] + ', ' + computerNumbers[1]);

if (playerSum > computerSum) {
    console.log('Vinci tu!');
} else if (playerSum < computerSum) {
    console.log('Vince il computer!');
} else {
    console.log('Avete pareggiato!');
}