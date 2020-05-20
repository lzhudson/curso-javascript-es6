# Axios
Axios basicamente é um pacote que nos permite trabalhar com requisições http de forma mais fácil.

Antes de mais nada precisamos instalar o axios:
```bash
yarn add axios
```

Agora vamos executar uma requisição a api do github:
```javascript
import axios from 'axios';

class Api {
	static async getUserInfo(username) {
		try {
			const response = await axios.get(`https://api.github.com/users/${username}`);
			console.log(response);
		}catch(err) {
			console.warn('Erro na API');
		}	
	}
}

Api.getUserInfo('lzhudsonn');
```

1. Primeiro importamos o axios
2. Criamos uma classe e dentro dela um método statico responsavel por receber um nome de usuario
3. Após isso criamos um bloco de try/catch, justamente para termos uma resposta caso dê algum erro em nossa requisição, esse uso é similar ao .then e .catch das promises convencionais.
4. Por último chamamos o método passando um nome de usuário para o mesmo.