var numeroCasuale = Math.floor((Math.random() * 6) + 1);
console.log(numeroCasuale);

var numero = prompt('digita un numero tra 1 e 6');
console.log(numero);

if (numero > numeroCasuale) {
  console.log('hai vinto');

}
else {
  console.log('hai perso');
}
