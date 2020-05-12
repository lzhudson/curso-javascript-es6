# Classes
Antes no Javascript, só era possivel trabalhar com classes através de **constructor functions**, mas com o avanço, o es6 trouxe para nós as classes.

Ex:
```javascript
class TodoList {
    constructor() {
       this.todos = [];
    }
    addTodo() {
       this.todos.push('Novo todo');
       console.log(this.todos);
    }
}
```

O **constructor**, é um método padrão que sempre executa algo quando a classe é instaciada, nesse exemplo ele inicializa uma propiedade chamada todo com um array vazio.

Para instaciarmos uma classe fazemos o seguinte:
```javascript
class TodoList {
    constructor() {
       this.todos = [];
    }
    addTodo() {
       this.todos.push('Novo todo');
       console.log(this.todos);
    }
}
var MinhaLista = new TodoList();
```

Com a variável MinhaLista podemos acessar tanto as propiedades quantos os metodos da classe TodoList.

Para utilizarmos um método basta fazermos dessa forma:
```javascript
class TodoList {
    constructor() {
       this.todos = [];
    }
    addTodo() {
       this.todos.push('Novo todo');
       console.log(this.todos);
    }
}


var MinhaLista = new TodoList();

MinhaLista.addTodo();

console.log(MinhaLista.todos); // ['Novo todo']
```

## Extendendo Classes
```javascript
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
    constructor(){
    }
}


var MinhaLista = new TodoList();
MinhaLista.add('Novo todo');
````

Note que usamos método add na variável que instância a classe TodoList, porém nosso código está vazio, mas note que usamos o operador extends para estendermos a classe List, então nossa classe TodoList, recebe o constructor e o método de herança ou seja elas possuem o mesmo comportamento porém esse comportamento é definido pela classe pai que é List.


Mas se quisermos adicionar nossas propiedades no constructor TodoList, como por exemplo o nome da pessoa que é responsavel por tal Todo.

```javascript
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
MinhaLista.add('Novo todo');
console.log(MinhaLista.data); // ['Novo todo']
console.log(MinhaLista.usuario); // Hudson
```

Note que acima, utilizamos o método **super()**, ele é basicamente responsavel por chamar o construtor da classe pai, agora teremos tanto a propiedade data quanto usuario em nossa variável MinhaLista.

**Obs:** Podemos também definir na classe que herda os propios metódos e atributos da nossa classe.


## Métodos Státicos
Servem basicamente para executarmos tal rotina, já que ele não consegue enxergar tais propiedades ou métodos pertecentes a classe.

Ex:
```javascript
class Matematica {
    static soma(a, b) {
        return a + b;
    }
}

console.log(Matematica.soma(10, 20));
```

Note que em métodos státicos, não precisamos instanciar a classe em uma variável para executarmos tal método.
