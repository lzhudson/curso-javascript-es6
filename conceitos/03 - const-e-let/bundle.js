"use strict";

var a = 1; // a = 10;

var usuario = {
  nome: 'Hudson'
};
usuario.nome = 'Fernando';
console.log(usuario.nome); // Fernando

var frutas = ['maça', 'laranja'];
frutas[2] = 'banana';
console.log(frutas);
var y = 20;

function teste(x) {
  var y = 2;

  if (x > 5) {
    // let y = 10;
    console.log(x, y);
  }
}

teste(10);
