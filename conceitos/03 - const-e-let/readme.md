# Const e Let

## Const
Const: A diferença entre a variavel criada com var ou let para uma constante é que seu valor não pode ser reatribuido ou seja não podemos muda-lo.

Ex:
```javascript
const a = 1;

a = 10; // Error
```

Porém podemos mutar a variável caso estejamos falando de um objeto ou array. Quando mutamos um objeto ou variavel significa mudar os valores de suas propiedades ou dos indices, sem mexamos na estrutura ou no valor daquela variável.

Ex:
```javascript
const usuario = { nome: 'Hudson' };

usuarion.nome = 'Fernando';

console.log(usuario.nome); // Fernando

const frutas = ['maça', 'laranja'];

frutas[2] = 'banana';

console.log(frutas);
```

## Let
Funciona semelhante ao var porém seu escopo é determinado de onde foi inserido.

## Escopo
Temos dois escopos o global e local, o local sempre é determinado pelas **{}**, já o global corresponde ao de toda nossa aplicação.

Ex:
```javascript
function teste(x) {
    let y = 2;
    console.log(y);
    if(x > 5) {
        let y = 10;
        console.log(x, y); // 10, 10
    }
}
```

Note que temos a variável **y** duas vezes, porém o Javascript realiza sempre a busca em escopo local e logo após isso caso ele não encontre determinada variável no escopo local passa a buscar no escopo global.

Ex:
```javascript
function teste(x) {
    let y = 2;
    console.log(y);
    if(x > 5) {
        // let y = 10;
        console.log(x, y); // 10, 2
    }
}
```

Note agora que ao comentarmos o Javascript exibe outro valor.

Ex:
```javascript
let y = 20;
function teste(x) {
    // let y = 2;
    console.log(y);
    if(x > 5) {
        // let y = 10;
        console.log(x, y); // 10, 20
    }
}
```

No exemplo acima temos outro valor a ser exibido.
