# Configurando Babel

Inicialmente usamos o comando:
```bash
yarn init
```

Em seguida instalamos a cli do babel:

```bash
yarn add @babel/cli
```

**cli:** É a interface de linha de comando ou seja são comandos adicionais que podemos executar a partir do nosso terminal, um exemplo claro disso é o yarn, onde ao instalarmos em nossa máquina também instalos a sua cli, aumentando assim nossos comandos via terminal.

Instalando o babel/preset-env:
```bash
yarn add @babel/preset-env
```

O Babel, basicamente traduz as novas features escritas em es6 para que os outros navegadores entendam essa sintaxe. Possibilitando assim que aplicação funcione em todos(na maioria) dos navegadores. O preset-env é basicamente a predefinição para a compilação de arquivos .js para o browser, também temos presets para react.js e node.js.

É necessário também o @babel/core:
```bash
yarn add @babel/core
```

Logo após isso é necessário a criação do arquivo .babelrc na raíz do projeto:

.babelrc:
```javascript
{
    "presets": ["@babel/preset-env"]
}
```

Em seguida criamos os arquivos index.html e o main.js:

Dentro do main.js colocamos o seguinte código:
```javascript
alert('Oi');

class Teste {
    metodo() {

    }
}
```

Dentro do arquivo package.json, adicionamos uma outra propiedade no json chamada **scripts**, que serve basicamente para resumirmos alguns comandos através da linha de comando.

Ex:

Para compilarmos o babel usariamos da seguinde forma no terminal:
```bash
babel ./main.js -o ./bundle.js -w
```
O comando acima simplesmente usa a **cli** do babel para compilarmos o arquivo que possui sintaxe do javascript es6 para sintaxe do es5, para que os outros navegadores entedam, logo após isso ele cria um arquivo de saída no diretorio raiz chamado "bundle.js", com o código transpilado.

1. "-o": determinamos o caminho e o nome do nosso arquivo de saída
2. "-w": essa flag determina que o terminal fique monitorando o arquivo main.js, e toda alteração que for feita ele realiza a transpilaçã automaticamente.

Porém para minizarmos e reduzirmos o esforço de estar sempre digitando o comando acima, criamos scripts personalizados, então dentro do package.json, criamos a propiedade script, e adicionamos um simples atalho para que o terminal execute tal comando.
```json
{
  "name": "01-configurando-babel",
  "version": "1.0.0",
  "main": "index.js",
  "license": "MIT",
  "dependencies": {
    "@babel/cli": "^7.8.4",
    "@babel/core": "^7.9.6",
    "@babel/preset-env": "^7.9.6"
  },
  "scripts": {
    "dev": "babel ./main.js -o ./bundle.js -w"
  }
}
```

Ao rodarmos o comando **yarn dev**, ele executa o mesmo comando que fizemos ateriormente porém sem a necessidade de digita-lo.
