"use strict";

var usuario = {
  nome: 'Hudson',
  idade: 19,
  endereco: {
    cidade: 'Fortaleza',
    estado: 'CE'
  }
}; // const nome = usuario.nome;
// const idade = usuario.idade;
// const cidade = usuario.endereco.cidade;

var nome = usuario.nome,
    idade = usuario.idade,
    cidade = usuario.endereco.cidade;
console.log(nome);
console.log(idade);
console.log(cidade); // function mostraUsuario(usuario) {
//     console.log(usuario.nome);
// }
// mostraUsuario(usuario);

function mostraUsuario(_ref) {
  var nome = _ref.nome,
      idade = _ref.idade;
  console.log(nome, idade);
}

mostraUsuario(usuario);
