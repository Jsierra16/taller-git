
const readline = require("readline");


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});


const secretNumber = Math.floor(Math.random() * 10) + 1;
let lastDifference = null;

console.log("Estoy pensando en un número del 1 al 10. ¿Puedes adivinar cuál es?");

function askGuess() {
  rl.question("Ingresa tu número: ", (input) => {
    const guess = parseInt(input);

    
    if (isNaN(guess) || guess < 1 || guess > 100) {
      console.log("Por favor ingresa un número válido entre 1 y 10.");
      return askGuess();
    }

    
    if (guess === secretNumber) {
      console.log("🎉 ¡Correcto! Adivinaste el número.");
      rl.close();
      return;
    }

    
    const currentDiff = Math.abs(secretNumber - guess);

   
    if (lastDifference === null) {
      console.log(currentDiff <= 10 ? "Caliente" : "Frío");
    } else {
      if (currentDiff < lastDifference) {
        console.log("¡Más caliente!");
      } else if (currentDiff > lastDifference) {
        console.log("¡Más frío!");
      } else {
        console.log("Igual de lejos que antes.");
      }
    }

    
    lastDifference = currentDiff;
    askGuess();
  });
}

askGuess();
