class Usuario {
    constructor(nome, email, senha) {
        this.nome = nome;
        this.email = email;
        this.senha = senha;
    }
    isAdmin() {
        return this.admin === true ? true : false;
    }
}
class Admin extends Usuario {
    constructor(nome, email, senha){
        super();
        this.admin = true;
    }
}


const User1 = new Usuario('Usuario', 'usuarioteste@gmail.com', 'senha1234');
const Admin1 = new Admin('Administrador', 'admteste@gmail.com', 'senha1234');

console.log(User1.isAdmin());
console.log(Admin1.isAdmin());
