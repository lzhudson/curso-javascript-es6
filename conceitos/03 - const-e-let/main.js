const a = 1;
// a = 10;

const usuario = { nome: 'Hudson' };

usuario.nome = 'Fernando';

console.log(usuario.nome); // Fernando

const frutas = ['maça', 'laranja'];

frutas[2] = 'banana';

console.log(frutas);
let y = 20;
function teste(x) {
    let y = 2;

    if(x > 5) {
        // let y = 10;
        console.log(x, y);
    }
}

teste(10);
