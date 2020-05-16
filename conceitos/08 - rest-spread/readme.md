# Operadores Rest/Spread
Antes de prosseguirmos será necessário instalar um plugin que dará suporte as features desses operadores ao nosso navegador.

````bash
yarn add @babel/plugin-proposal-object-rest-spread
````

Em seguida adicionamos ao nosso arquivo .babelrc, a propriedade plugins, colocando esse mesmo plugin nela.
```json
{
    "presets": ["@babel/preset-env"],
    "plugins": ["@babel/plugin-proposal-object-rest-spread"]
}
```
