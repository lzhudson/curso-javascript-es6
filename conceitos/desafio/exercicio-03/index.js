// 3.1

const arr = [1, 2, 3, 4, 5];

arr.map(item => item + 10);

// 3.2
// Dica: Utilize uma constante pra function
const usuario = { nome: 'Diego', idade: 23 };
const mostraIdade = usuario => usuario.idade;

mostraIdade(usuario);

// 3.3
// Dica: Utilize uma constante pra function
const nome2 = "Diego";
const idade2 = 23;
const mostraUsuario2 = (nome = 'Diego', idade = 18) => ({ nome, idade });

mostraUsuario2(nome2,idade2)
mostraUsuario2(nome2)

// 3.4
const promise = () => new Promise((resolve, reject) => resolve());

