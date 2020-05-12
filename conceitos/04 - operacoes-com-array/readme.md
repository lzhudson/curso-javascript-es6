# Operações com Array

## Map
O map basicamente manipula o array original, retornando um novo array.

Ex: Queremos todos os números de um determinado array multiplicados por 2.

```javascript
const arr = [1, 3, 4, 5, 8, 9];

const newArr = arr.map(function(item) {
    return item * 2;
})

console.log(newArr); // [2, 6, 8, 10, 16, 18]
```

Na funçao de callback, também podemos receber outros dois parâmetros que são o indice daquele elemento e também podemos retornar array completo.
```javascript
const arr = [1, 3, 4, 5, 8, 9];

const newArr = arr.map(function(item,index, arr) {
    console.log(item, index, arr);
    return item * 2;
})

// 1, 0, [1, 3, 4, 5, 8, 9]
// 3, 1, [1, 3, 4, 5, 8, 9]
// 4, 2, [1, 3, 4, 5, 8, 9]
// 5, 3, [1, 3, 4, 5, 8, 9]
// 8, 4, [1, 3, 4, 5, 8, 9]
// 9, 5, [1, 3, 4, 5, 8, 9]

console.log(newArr); // [2, 6, 8, 10, 16, 18]
```

## Reduce
Basicamente o reduce, faz com que peguemos todos os dados do nosso array e transformemos eles em único valor, que geralmente é um número.

Ex: Realizar a soma de todos os números.
```javascript
const arr = [1, 3, 4, 5, 8, 9];

const sum = arr.reduce(function(total, next) {
    return total + next;
});

console.log(sum); // 30
```

O processo é basicamente a acumulação de cada soma na variavel interna chamada "total" onde sempre temos o proximo numero a nossa disposição.

```javascript
// 1º: 0 + 1
// 2º: 1 + 3
// 3º: 4 + 4
// 4º: 8 + 5
// 5º: 13 + 8
// 6º: 21 + 9
// 1º: 30
```

Como no **map**, também temsos acesso as variavéis como indice e propio array que estamos percorrendo.

## Filter
Como própio nome já diz, filtra um determiado resultado de acordo com a expressão condicional passada.
Necessariamente essa expressão tem que retornar um valor booleano(true/false), onde assim podemos incluir ou não aquele determinado item no array. Assim como o map, também retorna um array.

Ex: Retornar todos os números pares de um array.
```javascript
const arr = [1, 3, 4, 5, 8, 9];

const filter = arr.filter(function(item) {
    return item % 2 === 0;
})

console.log(filter); // [4, 8]
```

## Find
Retorna o valor do primeiro elemento do array que satisfizer a função de teste provida, caso o contrário retorna undefined.

```javascript
const arr = [1, 3, 4, 5, 8, 9];

const find = arr.find(function(item){
    return item === 4;
});

console.log(find);
```


