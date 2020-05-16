# Object Short Syntax
Antigamente ao atribuirmos uma variavel a uma propiedade de um objeto sendo que as mesmas possuem o mesmo nome, utilizavamos a seguinte sintaxe:

```javascript
const nome = 'Hudson';
const idade = 19;

const usuario = {
    nome: nome,
    idade: idade,
    empresa: 'EngajaTech'
}
```

Porém com o ES6, podemos apenas utilizar o nome da propiedade.
**Obs:** Para que isso tenha efeito, a variavel e a propiedade devem possuir o mesmo nome.
```javascript
const nome = 'Hudson';
const idade = 19;

const usuario = {
    nome,
    idade,
    empresa: 'EngajaTech'
}
```
