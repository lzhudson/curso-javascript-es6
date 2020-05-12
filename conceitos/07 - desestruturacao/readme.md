# Desestruturação
A desestruturação é uma forma de desconstruirmos um objeto onde queremos extrair tais informações de dentro com uma sintaxe mais curta.

Ex: Sintaxe longa
```javascript
const usuario = {
    nome: 'Hudson',
    idade: 19,
    endereco: {
        cidade: 'Fortaleza',
        estado: 'CE'
    }
}

const nome = usuario.nome;
const idade = usuario.idade;
const cidade = usuario.endereco.cidade;
```

Note que precisamos percorrer todo o encadeamento de propiedades além de escrevermos três linhas para armazenar esse valor.

Com a desestruturação seria dessa forma:
```javascript
const usuario = {
    nome: 'Hudson',
    idade: 19,
    endereco: {
        cidade: 'Fortaleza',
        estado: 'CE'
    }
}
const { nome, idade, endereco: { cidade }} = usuario;
```

Podemos também usar essa feature em funções que recebem um objeto:

Usando a sintaxe antiga ficaria dessa forma:
```javascript
function mostraUsuario(usuario) {
    console.log(usuario.nome);
}

mostraUsuario(usuario);
```

Com a desestruturação ficaria dessa forma:
```javascript
function mostraUsuario({ nome, idade }) {
    console.log(nome, idade);
}

mostraUsuario(usuario);
```
