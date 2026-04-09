# JavaScript - Conceitos Avançados

## 📚 Introdução

Após dominar os fundamentos, é essencial compreender os conceitos mais avançados que JavaScript oferece para escrever código mais robusto, eficiente e profissional.

---

## 1️⃣ Protótipos e Herança

### 1.1 Cadeia de Protótipos (Prototype Chain)

Cada objeto JavaScript tem uma propriedade hidden `[[Prototype]]` que aponta para seu protótipo.

```javascript
const animal = {
    som() {
        console.log("Som genérico");
    }
};

const cachorro = Object.create(animal);
cachorro.latir = function() {
    console.log("Au au!");
};

cachorro.som();    // "Som genérico" (herdado)
cachorro.latir();  // "Au au!"
```

### 1.2 Prototype Property

```javascript
function Veiculo(marca) {
    this.marca = marca;
}

Veiculo.prototype.acelerar = function() {
    console.log(`${this.marca} está acelerando`);
};

const carro = new Veiculo("Toyota");
carro.acelerar(); // "Toyota está acelerando"
```

### 1.3 Verificação de Protótipo

```javascript
function Animal() {}
function Gato() {}
Gato.prototype = Object.create(Animal.prototype);

const miau = new Gato();

console.log(miau instanceof Gato);    // true
console.log(miau instanceof Animal);  // true
console.log(Gato.prototype.isPrototypeOf(miau)); // true
```

---

## 2️⃣ Orientação a Objetos em JavaScript

### 2.1 Classes (Sintaxe ES6+)

```javascript
class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    apresentar() {
        return `Olá, meu nome é ${this.nome}`;
    }

    static contar() {
        return "Método estático";
    }

    get maioridade() {
        return this.idade >= 18;
    }

    set aniversario(novaIdade) {
        if (novaIdade > this.idade) {
            this.idade = novaIdade;
        }
    }
}

const pessoa = new Pessoa("João", 25);
console.log(pessoa.apresentar()); // "Olá, meu nome é João"
console.log(pessoa.maioridade);   // true
pessoa.aniversario = 26;
console.log(pessoa.idade);        // 26
```

### 2.2 Herança com extends

```javascript
class Funcionario extends Pessoa {
    constructor(nome, idade, salario) {
        super(nome, idade);
        this.salario = salario;
    }

    apresentar() {
        return `${super.apresentar()} e trabalho aqui`;
    }

    getSalario() {
        return this.salario;
    }
}

const func = new Funcionario("Maria", 28, 3000);
console.log(func.apresentar()); // "Olá, meu nome é Maria e trabalho aqui"
```

### 2.3 Métodos Privados e Públicos

```javascript
class ContaBancaria {
    #saldo = 0; // Campo privado

    constructor(inicial) {
        this.#saldo = inicial;
    }

    depositar(valor) {
        if (valor > 0) {
            this.#saldo += valor;
        }
    }

    #calcularJuros() { // Método privado
        return this.#saldo * 0.01;
    }

    getSaldo() {
        return this.#saldo + this.#calcularJuros();
    }
}

const conta = new ContaBancaria(1000);
conta.depositar(500);
console.log(conta.getSaldo());
// console.log(conta.#saldo); // Erro!
```

---

## 3️⃣ Funções de Alta Ordem

### 3.1 Conceito

Funções que recebem outras funções como argumentos ou retornam funções.

```javascript
// Função que retorna função
function criarMultiplicador(fator) {
    return function(numero) {
        return numero * fator;
    };
}

const dobrar = criarMultiplicador(2);
const triplicar = criarMultiplicador(3);

console.log(dobrar(5));    // 10
console.log(triplicar(5)); // 15
```

### 3.2 Map, Filter, Reduce

```javascript
const numeros = [1, 2, 3, 4, 5];

// map: transformar
const quadrados = numeros.map(n => n ** 2);
console.log(quadrados); // [1, 4, 9, 16, 25]

// filter: filtrar
const pares = numeros.filter(n => n % 2 === 0);
console.log(pares); // [2, 4]

// reduce: acumular
const total = numeros.reduce((acc, n) => acc + n, 0);
console.log(total); // 15

// Composição
const resultado = numeros
    .filter(n => n > 2)
    .map(n => n * 2)
    .reduce((acc, n) => acc + n, 0);
console.log(resultado); // 28
```

### 3.3 Composição de Funções

```javascript
const adicionar = (a, b) => a + b;
const multiplicar = (a, b) => a * b;

function compor(...funcoes) {
    return function(valor) {
        return funcoes.reverse().reduce((v, f) => f(v, f), valor);
    };
}

const operacoes = [
    (n) => n + 5,
    (n) => n * 2,
    (n) => n - 3
];

const executar = operacoes.reduce((fn, f) => 
    (x) => f(fn(x)), 
    (x) => x
);

console.log(executar(10)); // ((10 * 2) + 5) - 3 = 22
```

---

## 4️⃣ Desestruturação

### 4.1 Desestruturação de Arrays

```javascript
const [primeiro, segundo, ...resto] = [1, 2, 3, 4, 5];
console.log(primeiro);  // 1
console.log(segundo);   // 2
console.log(resto);     // [3, 4, 5]

// Ignorar elementos
const [head, , third] = [1, 2, 3];
console.log(head);  // 1
console.log(third); // 3

// Valores padrão
const [a = 10, b = 20] = [5];
console.log(a, b); // 5, 20
```

### 4.2 Desestruturação de Objetos

```javascript
const pessoa = {
    nome: "João",
    idade: 30,
    email: "joao@email.com"
};

// Desestruturação básica
const { nome, idade } = pessoa;
console.log(nome);  // "João"

// Renomear
const { nome: n, idade: i } = pessoa;
console.log(n, i);  // "João", 30

// Valor padrão
const { profissao = "Não informada" } = pessoa;
console.log(profissao); // "Não informada"

// Rest em objetos
const { nome, ...resto } = pessoa;
console.log(resto); // { idade: 30, email: "joao@email.com" }
```

### 4.3 Desestruturação em Funções

```javascript
const dados = [1, 2, { id: 123, nome: "Produto" }];

const [id, qty, { nome, id: prodId }] = dados;
console.log(nome); // "Produto"

// Em parâmetros
function calcular({ a = 0, b = 0, operacao = (x, y) => x + y }) {
    return operacao(a, b);
}

console.log(calcular({ a: 5, b: 3, operacao: (x, y) => x * y })); // 15
```

---

## 5️⃣ Rest e Spread

### 5.1 Rest Operator (...)

Coleta argumentos em um array.

```javascript
function somar(...numeros) {
    return numeros.reduce((acc, n) => acc + n, 0);
}

console.log(somar(1, 2, 3, 4, 5)); // 15

// Com desestruturação
const [primeiro, ...resto] = [1, 2, 3, 4];
console.log(resto); // [2, 3, 4]

// Em objetos
const { a, ...propriedades } = { a: 1, b: 2, c: 3 };
console.log(propriedades); // { b: 2, c: 3 }
```

### 5.2 Spread Operator (...)

Expande iteráveis.

```javascript
// Com arrays
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combinado = [...arr1, ...arr2]; // [1, 2, 3, 4, 5, 6]

// Com strings
const caracteres = [..."JavaScript"]; // ['J', 'a', 'v', 'a', 'S', 'c', 'r', 'i', 'p', 't']

// Com objetos
const config1 = { theme: "dark" };
const config2 = { language: "pt" };
const config = { ...config1, ...config2 }; // { theme: "dark", language: "pt" }

// Em chamadas de função
function saudar(a, b, c) {
    console.log(a, b, c);
}
saudar(...[1, 2, 3]); // 1, 2, 3
```

---

## 6️⃣ Closure

### 6.1 Conceito

Uma função que "lembra" do escopo em que foi criada.

```javascript
function criarContador(inicial = 0) {
    let count = inicial;

    return {
        incrementar() {
            return ++count;
        },
        decrementar() {
            return --count;
        },
        valor() {
            return count;
        }
    };
}

const contador = criarContador(10);
console.log(contador.incrementar()); // 11
console.log(contador.incrementar()); // 12
console.log(contador.decrementar()); // 11
console.log(contador.valor());       // 11
```

### 6.2 IIFE (Immediately Invoked Function Expression)

```javascript
const resultado = (function() {
    const privado = "Não acessível";
    return `Acessível: ${privado}`;
})();

console.log(resultado); // "Acessível: Não acessível"

// Evitando poluição global
(function() {
    var x = 10; // Escopo da IIFE
})();
// console.log(x); // ReferenceError
```

---

## 7️⃣ Promessas e Assincronismo

### 7.1 Promessas

```javascript
const promessa = new Promise((resolve, reject) => {
    setTimeout(() => {
        const sucesso = true;
        if (sucesso) {
            resolve("Operação bem-sucedida");
        } else {
            reject(new Error("Falha na operação"));
        }
    }, 1000);
});

promessa
    .then(resultado => console.log(resultado))
    .catch(erro => console.error(erro))
    .finally(() => console.log("Finalizado"));
```

### 7.2 Async/Await

```javascript
async function buscarDados(id) {
    try {
        const resposta = await fetch(`https://api.exemplo.com/dados/${id}`);
        const dados = await resposta.json();
        return dados;
    } catch (erro) {
        console.error("Erro:", erro);
        throw erro;
    }
}

// Usando
buscarDados(1)
    .then(dados => console.log(dados))
    .catch(erro => console.error(erro));
```

### 7.3 Promise.all e Promise.race

```javascript
// Espera todas as promessas
const p1 = Promise.resolve(1);
const p2 = Promise.resolve(2);
const p3 = Promise.resolve(3);

Promise.all([p1, p2, p3])
    .then(valores => console.log(valores)); // [1, 2, 3]

// Retorna a primeira a resolver/rejeitar
Promise.race([p1, p2, p3])
    .then(valor => console.log(valor)); // 1
```

---

## 8️⃣ This, Call, Apply e Bind

### 8.1 This

O valor de `this` depende de como a função é chamada.

```javascript
const pessoa = {
    nome: "João",
    saudar() {
        console.log(`Olá, ${this.nome}`); // this = pessoa
    }
};

pessoa.saudar(); // "Olá, João"

const saudacao = pessoa.saudar;
saudacao(); // "Olá, undefined" (this = global)
```

### 8.2 Call e Apply

Executam a função com um `this` específico.

```javascript
function apresentar(saudacao, despedida) {
    console.log(`${saudacao}, ${this.nome}!`);
    console.log(despedida);
}

const pessoa = { nome: "Maria" };

// call: argumentos individuais
apresentar.call(pessoa, "Oi", "Tchau"); // "Oi, Maria! Tchau"

// apply: argumentos em array
apresentar.apply(pessoa, ["Oi", "Tchau"]); // "Oi, Maria! Tchau"
```

### 8.3 Bind

Retorna uma nova função com `this` fixado.

```javascript
function saudar(saudacao) {
    console.log(`${saudacao}, ${this.nome}`);
}

const pessoa = { nome: "João" };
const saudacaoJoao = saudar.bind(pessoa, "Olá");

saudacaoJoao(); // "Olá, João"

// Útil com event listeners
const elem = document.querySelector("button");
// elem.addEventListener("click", saudar.bind(pessoa));
```

---

## 9️⃣ Módulos

### 9.1 CommonJS (Node.js)

```javascript
// modulo.js
function multiplicar(a, b) {
    return a * b;
}

module.exports = multiplicar;
// ou
module.exports = { multiplicar };

// usar.js
const multiplicar = require('./modulo');
console.log(multiplicar(3, 4)); // 12
```

### 9.2 ES6 Modules

```javascript
// math.js
export function somar(a, b) {
    return a + b;
}

export const PI = 3.14159;

export default class Calculadora {
    dividir(a, b) {
        return a / b;
    }
}

// main.js
import Calculadora, { somar, PI } from './math.js';

console.log(somar(2, 3));    // 5
console.log(PI);              // 3.14159
console.log(new Calculadora().dividir(10, 2)); // 5

// Importar tudo
import * as math from './math.js';
console.log(math.somar(2, 3)); // 5
```

---

## 🔟 Manipulação do DOM Avançada

### 10.1 Event Delegation

```javascript
const lista = document.querySelector("ul");

lista.addEventListener("click", (event) => {
    if (event.target.tagName === "LI") {
        console.log("Item clicado:", event.target.textContent);
        event.target.classList.toggle("ativo");
    }
});
```

### 10.2 Manipulação de Atributos e Datasets

```javascript
const elemento = document.querySelector("[data-id]");

// Atributos
console.log(elemento.getAttribute("data-id"));
elemento.setAttribute("data-user", "123");
elemento.removeAttribute("data-old");

// Datasets
console.log(elemento.dataset.id);     // Resultado do data-id
elemento.dataset.novo = "valor";      // Cria data-novo
```

### 10.3 Criação e Clonagem de Elementos

```javascript
// Criar elemento
const novo = document.createElement("div");
novo.textContent = "Conteúdo";
novo.className = "container";
document.body.appendChild(novo);

// Clonar
const clone = novo.cloneNode(true); // true = clona filhos
document.body.appendChild(clone);

// Remover
novo.removeChild(novo.firstChild);
novo.remove();
```

---

## 1️⃣1️⃣ Tratamento Avançado de Erros

### 11.1 Erros Personalizados

```javascript
class ErroValidacao extends Error {
    constructor(mensagem) {
        super(mensagem);
        this.name = "ErroValidacao";
    }
}

class ErroAutenticacao extends Error {
    constructor(mensagem) {
        super(mensagem);
        this.name = "ErroAutenticacao";
    }
}

try {
    throw new ErroValidacao("Email inválido");
} catch (erro) {
    if (erro instanceof ErroValidacao) {
        console.log("Erro de validação:", erro.message);
    }
}
```

### 11.2 Stack Trace

```javascript
try {
    funcao1();
} catch (erro) {
    console.log("Stack trace:");
    console.log(erro.stack);
}

function funcao1() {
    funcao2();
}

function funcao2() {
    throw new Error("Algo deu errado");
}
```

---

## 1️⃣2️⃣ Context e Execution Stack

### 12.1 Execution Context

Cada função cria seu próprio execution context com:
- Variable Environment
- Lexical Environment
- This binding

```javascript
var x = "global";

function outer() {
    var x = "outer";
    
    function inner() {
        var x = "inner";
        console.log(x); // "inner"
    }
    
    inner();
    console.log(x); // "outer"
}

outer();
console.log(x); // "global"
```

### 12.2 Hoisting

```javascript
// Função é hoisted completamente
console.log(funcao()); // "Resultado"

function funcao() {
    return "Resultado";
}

// Variável var é hoisted mas não inicializada
console.log(variavel); // undefined
var variavel = 10;

// let e const criam temporal dead zone
// console.log(let_var); // ReferenceError
let let_var = 20;
```

---

## 1️⃣3️⃣ Padrões de Design Comuns

### 13.1 Singleton

```javascript
const singleton = (() => {
    let instancia;

    return {
        obterInstancia() {
            if (!instancia) {
                instancia = {
                    criado: new Date()
                };
            }
            return instancia;
        }
    };
})();

console.log(singleton.obterInstancia() === singleton.obterInstancia()); // true
```

### 13.2 Factory

```javascript
function criarUsuario(tipo) {
    if (tipo === "admin") {
        return {
            nome: "Admin",
            permissoes: ["ler", "escrever", "deletar"]
        };
    } else if (tipo === "usuario") {
        return {
            nome: "Usuário",
            permissoes: ["ler"]
        };
    }
}

const admin = criarUsuario("admin");
const usuario = criarUsuario("usuario");
```

### 13.3 Observer

```javascript
class EventEmitter {
    constructor() {
        this.eventos = {};
    }

    on(evento, callback) {
        if (!this.eventos[evento]) {
            this.eventos[evento] = [];
        }
        this.eventos[evento].push(callback);
    }

    emit(evento, dados) {
        if (this.eventos[evento]) {
            this.eventos[evento].forEach(callback => callback(dados));
        }
    }
}

const emitter = new EventEmitter();
emitter.on("login", (usuario) => {
    console.log(`${usuario} fez login`);
});

emitter.emit("login", "João");
```

---

## Conclusão

Estes conceitos avançados são fundamentais para desenvolver aplicações JavaScript profissionais e escaláveis. O domínio deles permite escrever código mais limpo, eficiente e fácil de manter.
