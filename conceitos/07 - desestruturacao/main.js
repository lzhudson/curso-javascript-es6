const usuario = {
    nome: 'Hudson',
    idade: 19,
    endereco: {
        cidade: 'Fortaleza',
        estado: 'CE'
    }
}

// const nome = usuario.nome;
// const idade = usuario.idade;
// const cidade = usuario.endereco.cidade;


const { nome, idade, endereco: { cidade } } = usuario;

console.log(nome);
console.log(idade);
console.log(cidade);

// function mostraUsuario(usuario) {
//     console.log(usuario.nome);
// }

// mostraUsuario(usuario);

function mostraUsuario({ nome, idade }) {
    console.log(nome, idade);
}

mostraUsuario(usuario);
