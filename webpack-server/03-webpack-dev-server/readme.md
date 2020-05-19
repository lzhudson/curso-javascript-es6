# Webpack dev server
Basicamente é um pacote que nos permite criar um servidor em modo de desenvolvimento, assim temos algumas features como o live-reload.

Para adicionar basta instalarmos esse pacote:
```bash 
yarn add webpack-dev-server -D
```

Em seguida modificamos nosso arquivo de configuração do webpack, adicionando a propriedade devServer e nela adicionamos a propriedade contentBase, que seta o nosso diretorio onde irá rodar nossa aplicação e que também ficará monitorando as alterações na mesma.
```javascript
module.exports = {
	entry: './src/main.js',
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

Em seguida criamos dois scripts no arquivo package.json, um que inicializa nosso servidor em modo de desenvolvimento e outro em modo de produção.
```javascript
{
  "name": "03-webpack-dev-server",
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
    "webpack-cli": "^3.3.11",
    "webpack-dev-server": "^3.11.0"
  },
  "scripts": {
    "dev": "webpack-dev-server --mode=development",
    "build": "webpack-dev-server --mode=production"
  }
}
```

Note que em modo de desenvolvimento não visualizamos o arquivo final que é localizado na pasta public, pois o webpack injeta diretamente esse arquivo na index.html, para visualizarmos devemos rodar em modo de produção.