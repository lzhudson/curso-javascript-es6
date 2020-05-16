// REST - Pegar o resto das propriedades
const usuario = {
    nome: 'Hudson',
    idade: 19,
    empresa: 'EngajaTech'
}

const { nome, ...resto } = usuario;

console.log(nome);
console.log(resto);

const array = [1, 2, 3, 4, 5];

const [a, b, ...c] = array;

console.log(a);
console.log(b);
console.log(c);

function soma(a, b, c) {
    return a + b + c;
}
console.log(soma(1, 3, 4));

function somaRest(...params) {
    return params.reduce((total, next) => total + next, 0);
}
console.log(somaRest(10, 20, 30, 40));

function somaRest2(a, b, ...params) {
    console.log(a);
    console.log(b);
    console.log(params);
}

somaRest2(10, 20, 100, 200, 300, 400, 500, 600);

// SPREAD
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const arr3 = [...arr1, ...arr2];

console.log(arr3);

const usuario2 = {
    nome: 'Hudson',
    idade: 19,
    empresa: 'EngajaTech'
}

const usuario3 = { ...usuario2, nome: 'Gabriel' };
console.log(usuario3);
