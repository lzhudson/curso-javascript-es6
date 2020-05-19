# Configurando o Webpack

## O que é Webpack ?
Webpack é um empacotador de arquivos Javascript que também pode ser utilizado em outros tipos de arquivos como HTML/CSS. Usamos ele principalmente na programação modular onde dividimos nosso código em diversos arquivos e no final usamos o webpack para empacotar tudo isso e servir um único arquivo compilado.


## Modulos
Para usar recursos como a transpilação de Javascript ES6+, teremos que configurar um arquivo chamado **webpack.config.js** que é responsável por lidar com esse modulo de transpilação.


## Instalando o Webpack
```bash
yarn add webpack webpack-cli -D
```

No comando acima instalamos o propio pacote do webpack e também sua CLI(Interface de linha de comando), que é responsavel por nos dar acesso aos comandos do webpack.

## Criando arquivo webpack.config.js
```javascript
module.exports = {
	entry: './main.js',
	output: {
		path: __dirname,
		filename: 'bundle.js'
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

- Propiedade **entry**: Seta nosso arquivo principal
- Propiedade **output**: Seta o nosso diretorio que será responsavel por armazenar nosso código Javascript tratado por nossos modulos e também o nome que esse arquivo terá.
- Propiedade **module**: Propiedade responsável por especificar nossos módulos que podem variar no caso acima estamos configurando que todo arquivo que termine com **.js** deve ser tratado pelo babel-loader, que é reponsável por transpilar nosso código e que ele exclua desse "tratamento" a pasta **/node_modules/**.

Após essa configuração, teremos que instalar também nosso babel-loader.
```bash
yarn add babel-loader -D
```

Após instalarmos, criaresmos nosso script que inicializa o webpack e que é responsável por monitorar nossos arquivos e realizar as devidas modificações.

No arquivo **package.json**, adicionamos um script chamado dev que basicamente usa a CLI do webpack que startar esse processo de empacotação e fica monitorando para isso usamos a flag -w.
```javascript
{
  "name": "01-configurando-webpack",
  "version": "1.0.0",
  "main": "index.js",
  "license": "MIT",
  "dependencies": {},
  "devDependencies": {
    "@babel/cli": "^7.8.4",
    "@babel/core": "^7.9.6",
    "@babel/plugin-proposal-object-rest-spread": "^7.9.6",
    "@babel/preset-env": "^7.9.6",
    "babel-loader": "^8.1.0",
    "webpack": "^4.43.0",
    "webpack-cli": "^3.3.11"
  },
  "scripts": {
    "dev": "webpack --mode=development -w"
  }
}
```
