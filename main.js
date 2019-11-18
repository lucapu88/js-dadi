//Generare un numero casuale tra 1 e 6.
var numeroCasuale = Math.floor((Math.random() * 6) + 1);
console.log(numeroCasuale);
//Attraverso un prompt chiedere all'utente un numero tra 1 e 6.
var numero = prompt('digita un numero tra 1 e 6');
console.log(numero);
//Stampare un messaggio per dire all'utente se ha vinto oppure no (il numero più alto vince).
if (numero > numeroCasuale && numero < 7) {
  console.log('hai vinto'); //Se il numero digitato è più alto del numero casuale
  document.getElementById('vinci-perdi').innerHTML = ('BRAVO HAI VINTO!!!');
  document.getElementById('vinci-img').setAttribute('class','visible');
}
if (numero < numeroCasuale) {
  console.log('hai perso'); //Se il numero digitato è più basso del numero casuale
  document.getElementById('vinci-perdi').innerHTML = ('Peccato...HAI PERSO!');
  document.getElementById('perdi-img').setAttribute('class','visible');
}

if (numero > 6) { //Se l'utente digita un numero più alto del numero 6
  console.log('non barare, il numero deve essere da 1 a 6!');
  document.getElementById('vinci-perdi').innerHTML = ('Non barare!!! Il numero deve essere da 1 a 6!');
  document.getElementById('baro-img').setAttribute('class','visible');
}

if (numero == numeroCasuale) { //se il numero digitato è pari al numero casuale
  document.getElementById('vinci-perdi').innerHTML = ('PAREGGIO');
  document.getElementById('pareggia-img').setAttribute('class','visible');
}

// if isNaN(numero) {
//   document.getElementById('vinci-perdi').innerHTML = ('Non hai digitato un numero...');
// }
//COME FACCIO A FAR SI CHE SE L'UTENTE NON DIGITA UN NUMERO, MI STAMPA QUALCOSA???
