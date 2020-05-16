const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
];

// 2.1
const ageOfUsuarios = usuarios.map(usuario => {
    return usuario.idade;
});

console.log(ageOfUsuarios);

// 2.2
const usersWorkingAtRocketseatAndGreaterYear18 = usuarios.filter(usuario => {
    return usuario.empresa === 'Rocketseat' && usuario.idade > 18;
});

console.log(usersWorkingAtRocketseatAndGreaterYear18);

// 2.3
const userWorkingAtGoogle = usuarios.find(usuario => {
    return usuario.empresa === 'Google';
});

console.log(userWorkingAtGoogle);

// 2.4
const newUsers = usuarios.map(usuario => {
    const nome = usuario.nome;
    const idade = usuario.idade * 2;
    const empresa = usuario.empresa;

    return {
        nome,
        idade,
        empresa
    }
}).filter(usuario => {
    return usuario.idade <= 50;
})

console.log(newUsers);
