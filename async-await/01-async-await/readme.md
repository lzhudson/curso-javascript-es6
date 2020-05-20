# Async Await
Com ela, é possível escrever código assíncrono como se estivéssemos escrevendo código síncrono.

Nas promises usamos a seguinte sintaxe:
```javascript
const minhaPromise = () => new Promise((resolve, reject) => {
	setTimeout(() => { resolve('OK') }, 2000);
});
minhaPromise()
	.then(response => {
		console.log(response);
	})
	.catch(err => {
		console.log(err);
	})
```
Usamos sempre os métodos **.then** e **.catch**, para caputrar o sucesso ou erro de uma função, porém com async/await reduziriamos esse código o tornando mais simples tanto na leitura quanto na escrita mas antes precisamos instalar duas dependências, uma é reponsável por disponibilizar o async/await nos navegadores e outro é um polyfill, que basicamente ajuda os navegadores a entender certas funcionalidades não implementadas pelos mesmos.
```bash
yarn add @babel/plugin-transform-async-to-generator @babe/polyfill -D
```

Após isso adicionamos o plugin a nossa dependência do no arquivo .babelrc:

.babelrc
```javascript
{
    "presets": ["@babel/preset-env"],
    "plugins": ["@babel/plugin-proposal-object-rest-spread", "@babel/plugin-transform-async-to-generator"]
}
```

E em seguida adicionamos o polyfill do babel ao nosso arquivo de configuração do webpack:

webpack.config.js:
```javascript
module.exports = {
	entry: ['@babel/polyfill','./src/main.js'],
	output: {
		path: __dirname + '/public/',
		filename: 'bundle.js'
	},
	devServer: {
		contentBase: __dirname + '/public/'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader'
				}
			}
		],
	},
};
```

Partindo para o código seria necessariamente da seguinte forma, primeiro precisamos indicar que tal função irá se tornar assícrona com o uso da palavra reservada async.
```javascript
const minhaPromise = () => new Promise((resolve, reject) => {
	setTimeout(() => { resolve('OK') }, 2000);
});

async function executPromise() {

}
```

Após isso, podemos usar o await para indicarmos que aquele trecho de código é assíncrono.
```javascript
const minhaPromise = () => new Promise((resolve, reject) => {
	setTimeout(() => { resolve('OK') }, 2000);
});

async function executPromise() {
	const response = await minhaPromise();
	console.log(response);
}
```
**Obs:**O await só pode ser usado dentro de funções assíncronas.