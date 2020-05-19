# Importação/Exportação
Essa funcionalidade nos permite dividir nosso código em pequenos trechos reutilizaveis mais fáceis de se trabalhar e testar.

Ex: index.js
```javascript
function soma(a, b) {
	return a + b;
}
function sub(a, b) {
	return a - b;
}
function mult(a, b) {
	return a * b;
}
function div(a, b) {
	return a / b;
}
console.log(soma(10, 20));
console.log(sub(20, 5));
console.log(mult(40, 40));
console.log(div(40 / 10));
```

Note que no arquivo acima estamos utilizando as funções um único arquivo porém podemos separar essas funções em outro arquivo para que assim possamos utiliza-las em outros locais em nossa aplicação não só no arquivo em que as mesmas estão inseridas.

Ex: 

calculadora.js
```javascript
export function soma(a, b) {
	return a + b;
}
export function sub(a, b) {
	return a - b;
}
export function mult(a, b) {
	return a * b;
}
export function div(a, b) {
	return a / b;
}
```
index.js
```javascript
import { soma, sub, mult, div } from './calculadora';
console.log(soma(10, 20));
console.log(sub(20, 5));
console.log(mult(40, 40));
console.log(div(40 / 10));
```

Geralmente utilizamos somente um arquivo por funcionalidade, assim usamos a sintaxe de **export default**, todo arquivo só pode ter um tipo de exportação padrão, ou seja ao importarmos esse arquivo a funcionalidade será atribuida simplesmente a função que preceder a esse export default.

Ex:
soma.js
```javascript
export default function soma(a, b) {
	return a + b;
}
```
index.js
```javascript
import soma from './soma';

console.log(soma(1, 2));
```
Também podemos utilizar qualquer nome ao importamos esse arquivo, nesse caso não precisamos nos prender a ele ou até mesmo aplicar a desestruturação.

Ex:
index.js
```javascript
import somaFuncao from './soma';
console.log(soma(1, 2));
```

**Obs**: Note que isso acontece por estarmos utilizando a sintaxe de export default, caso estivermos utilizando o export, seria necessário utilizarmos o mesmo nome da função que se encontra no arquivo soma.js.

Podemos ter também um export default e outros inumeros exports dentro de um arquivo, para importamos seria da seguinte forma.

Ex: 

calculadora.js
```javascript
export default function soma(a, b) {
	return a + b;
}
export function sub(a, b) {
	return a - b;
}
export function mult(a, b) {
	return a * b;
}
export function div(a, b) {
	return a / b;
}
```
index.js
```javascript
import soma, { sub, mult, div } from './calculadora';
console.log(soma(10, 20));
console.log(sub(20, 5));
console.log(mult(40, 40));
console.log(div(40 / 10));
```


Podemos também atribuir nome as funções importadas com o export da seguinte forma.
calculadora.js
```javascript
export function soma(a, b) {
	return a + b;
}
export function sub(a, b) {
	return a - b;
}
export function mult(a, b) {
	return a * b;
}
export function div(a, b) {
	return a / b;
}
```
index.js
```javascript
import { soma as somaFunc, sub as subFunc, mult as multFunc, div as divFunc} from './calculadora';
console.log(somaFunc(10, 20));
console.log(subFunc(20, 5));
console.log(multFunc(40, 40));
console.log(divFunc(40 / 10));
```

Por ultimos podemos importar todas as funções de um único arquivo e colocarmos em uma unica variavel que consequentemente se torna um objeto e que nos da acesso as mesmas.

Ex:
calculadora.js
```javascript
export function soma(a, b) {
	return a + b;
}
export function sub(a, b) {
	return a - b;
}
export function mult(a, b) {
	return a * b;
}
export function div(a, b) {
	return a / b;
}
```
index.js
```javascript
import * as calculadoraFuncoes from './calculadora';
console.log(calculadoraFuncoes.soma(10, 20));
```
