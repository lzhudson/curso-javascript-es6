# Arrow Functions
São formas mais simples de escrever funções utilizando uma sintaxe mais curta, um dos contextos mais plausiveis para se usar arrow functions são em funções anônimas.

Ex: Funções ES5
```javascript
const arr = [1, 3, 4, 5, 6];

const newArray = arr.map(function(item){
    return item * 2;
});

console.log(newArray); // [2, 6, 8, 10, 12]
```

Ex: Funções ES6 (Stage 1)
```javascript
const arr = [1, 3, 4, 5, 6];

const newArray = arr.map((item) =>{
    return item * 2;
});

console.log(newArray); // [2, 6, 8, 10, 12]
```


Ex: Funções ES6 (Stage 2)
```javascript
const arr = [1, 3, 4, 5, 6];

const newArray = arr.map(item =>{
    return item * 2;
});

console.log(newArray); // [2, 6, 8, 10, 12]
```

Ex: Funções ES6 (Stage 3)
```javascript
const arr = [1, 3, 4, 5, 6];

const newArray = arr.map(item =>  item * 2);

console.log(newArray); // [2, 6, 8, 10, 12]
```

**Obs:** No estágio 3 usamos apenas dessa forma pois nossa função apenas retorna algo e não temos nenhuma outra instrução antes ou após o retorno.

Podemos também escrever nossas funções sem a palavra chave **function**.

Ex:
```javascript
function soma(a,b) {
    return a + b;
}
```

```javascript
const soma = (a,b) => {
    return a + b;
}
```

Podemos também retornar array's e objetos.

Ex: Retornando array
```javascript
const returnArr = () => [1, 2, 3, 4, 5]
```

Ex: Retornando Objetos
```javascript
const returnObj = () => ({nome: 'Hudson'});
```
