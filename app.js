let titulo = document.querySelector('h1');
titulo.innerHTML = "Hora del desafío";

function botonConsole() {
    alert ('El botón fue clicado');
}

function botonPrompt() {
    let userInput = prompt("Escribe el nombre de una ciudad de Brasil:");
    alert(`Estuve en ${userInput} y me acordé de ti`);
}

function botonAlert() {
    alert ('Yo amo JS');
}

function botonSuma() {
    let numero1 = prompt ('Escribe el primer número');
    let numero2 = prompt ('Escribe el segundo número');
    let suma = Number(numero1) + Number(numero2);

    alert (`El resultado de la suma es: ${suma}`);
}