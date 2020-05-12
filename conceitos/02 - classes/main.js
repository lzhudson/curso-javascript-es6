class List {
    constructor() {
        this.data = [];
    }
    add(data) {
        this.data.push(data);
        console.log(this.data);
    }
}
class TodoList extends List{
    constructor() {
        super();
        this.usuario = 'Hudson';
    }
    mostraUsuario() {
        console.log(this.usuario);
    }
}


var MinhaLista = new TodoList();


document.getElementById('novo-todo').onclick = function() {
    MinhaLista.add('Novo todo');
}
MinhaLista.mostraUsuario();

class Matematica {
    static soma(a, b) {
        return a + b;
    }
}

console.log(Matematica.soma(10, 20));
