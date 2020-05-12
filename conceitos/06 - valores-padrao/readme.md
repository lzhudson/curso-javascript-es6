# Valores Padrão
No ES6 tivemos a inclusão de uma features onde podemos definir valores padrões nos parametros de nossas funções quando os argumentos não forem passados.

Ex: Sem usar valores padrão
```javascript
function soma(a, b) {
    return a + b;
}
console.log(soma(1)); // NaN
console.log(soma()); // NaN
```

Ex: Usando valores padrão
```javascript
function soma(a = 3, b = 6) {
    return a + b;
}
console.log(soma(1)); // 7
console.log(soma()); // 9
```


O mesmo pode ser usado para arrow functions.

Ex:
```javascript
const soma = (a = 10, b = 20) => a + b;

console.log(soma()); // 30
console.log(soma(5)); // 25
```
