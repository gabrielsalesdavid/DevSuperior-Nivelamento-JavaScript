# JavaScript - Fundamentos

## 📚 Introdução

JavaScript é uma linguagem de programação dinâmica, interpretada e orientada a objetos, principalmente utilizada para desenvolvimento web. Este documento aborda os fundamentos essenciais para dominar a linguagem.

---

## 1️⃣ Tipos de Dados

### Tipos Primitivos

#### 1.1 String
Representa sequências de caracteres.

```javascript
const nome = "Gabriel";
const mensagem = 'Bem-vindo ao JavaScript';
const template = `Olá, ${nome}!`;
```

#### 1.2 Number
Representa valores numéricos (inteiros e decimais).

```javascript
const idade = 25;
const altura = 1.75;
const resultado = 10 / 3; // 3.3333...
const infinito = Infinity;
const naoNumero = NaN;
```

#### 1.3 Boolean
Representa valores lógicos verdadeiro ou falso.

```javascript
const ativo = true;
const removido = false;
const condicao = idade > 18; // true
```

#### 1.4 Undefined
Variável declarada mas não inicializada.

```javascript
let indefinido;
console.log(indefinido); // undefined
```

#### 1.5 Null
Representa a ausência intencional de valor.

```javascript
let nulo = null;
let usuario = null;
```

#### 1.6 Symbol
Identificador único e imutável.

```javascript
const simbolo1 = Symbol("id");
const simbolo2 = Symbol("id");
console.log(simbolo1 === simbolo2); // false
```

#### 1.7 BigInt
Representa números inteiros muito grandes.

```javascript
const numeroGrande = 9007199254740991n;
const calculo = 100n + 50n;
```

---

## 2️⃣ Variáveis e Escopo

### 2.1 Declarações de Variáveis

#### var (Não Recomendado)
- Escopo de função
- Pode ser redeclarada
- Sofre hoisting

```javascript
var nome = "João";
if (true) {
    var nome = "Maria"; // Afeta a variável externa
}
console.log(nome); // "Maria"
```

#### let (Recomendado)
- Escopo de bloco
- Não pode ser redeclarada no mesmo escopo
- Sofre hoisting temporal

```javascript
let idade = 25;
if (true) {
    let idade = 30; // Variável local do bloco
}
console.log(idade); // 25
```

#### const (Recomendado)
- Escopo de bloco
- Não pode ser reatribuída (mas pode ter propriedades modificadas)
- Sofre hoisting temporal

```javascript
const PI = 3.14159;
const pessoa = { nome: "Ana" };
pessoa.nome = "Paula"; // Permitido
// pessoa = {}; // Erro!
```

### 2.2 Escopo

```javascript
let globalVar = "global";

function funcao() {
    let localVar = "local";
    console.log(globalVar); // "global"
    
    if (true) {
        let blocoVar = "bloco";
        console.log(localVar); // "local"
    }
    // console.log(blocoVar); // ReferenceError
}
```

---

## 3️⃣ Operadores

### 3.1 Operadores Aritméticos

```javascript
let a = 10, b = 3;

console.log(a + b);  // 13 (adição)
console.log(a - b);  // 7 (subtração)
console.log(a * b);  // 30 (multiplicação)
console.log(a / b);  // 3.333... (divisão)
console.log(a % b);  // 1 (resto)
console.log(a ** b); // 1000 (exponenciação)
```

### 3.2 Operadores de Atribuição

```javascript
let x = 10;

x += 5;  // x = x + 5 = 15
x -= 3;  // x = x - 3 = 12
x *= 2;  // x = x * 2 = 24
x /= 4;  // x = x / 4 = 6
x %= 4;  // x = x % 4 = 2
```

### 3.3 Operadores de Comparação

```javascript
console.log(10 == "10");   // true (comparação de valor)
console.log(10 === "10");  // false (comparação estrita)
console.log(10 !== "10");  // true
console.log(5 < 10);       // true
console.log(5 <= 5);       // true
console.log(10 > 5);       // true
console.log(10 >= 10);     // true
```

### 3.4 Operadores Lógicos

```javascript
const a = true, b = false;

console.log(a && b);  // false (AND)
console.log(a || b);  // true (OR)
console.log(!a);      // false (NOT)

// Curto-circuito
const resultado = null || "padrão"; // "padrão"
const info = {} && "dados"; // "dados"
```

### 3.5 Operador Ternário

```javascript
const idade = 20;
const maioridade = idade >= 18 ? "Maior de idade" : "Menor de idade";
console.log(maioridade); // "Maior de idade"
```

---

## 4️⃣ Estruturas de Controle

### 4.1 Condicional if/else

```javascript
const nota = 7;

if (nota >= 9) {
    console.log("Excelente");
} else if (nota >= 7) {
    console.log("Bom");
} else if (nota >= 5) {
    console.log("Satisfatório");
} else {
    console.log("Insuficiente");
}
```

### 4.2 Switch/case

```javascript
const diaSemana = 3;

switch (diaSemana) {
    case 1:
        console.log("Segunda");
        break;
    case 2:
        console.log("Terça");
        break;
    case 3:
        console.log("Quarta");
        break;
    default:
        console.log("Dia inválido");
}
```

### 4.3 Laços de Repetição

#### for
```javascript
for (let i = 0; i < 5; i++) {
    console.log(i);
}
```

#### while
```javascript
let contador = 0;
while (contador < 3) {
    console.log(contador);
    contador++;
}
```

#### do...while
```javascript
let num = 0;
do {
    console.log(num);
    num++;
} while (num < 3);
```

#### for...in (itera sobre índices)
```javascript
const pessoa = { nome: "João", idade: 30 };
for (let chave in pessoa) {
    console.log(`${chave}: ${pessoa[chave]}`);
}
```

#### for...of (itera sobre valores)
```javascript
const numeros = [1, 2, 3];
for (let numero of numeros) {
    console.log(numero);
}
```

---

## 5️⃣ Arrays

### 5.1 Criação e Acesso

```javascript
const frutas = ["maçã", "banana", "laranja"];
console.log(frutas[0]); // "maçã"
console.log(frutas.length); // 3

frutas[3] = "uva";
console.log(frutas); // ["maçã", "banana", "laranja", "uva"]
```

### 5.2 Métodos Principais

```javascript
const nums = [1, 2, 3];

// Adicionar elementos
nums.push(4);            // Adiciona ao final
nums.unshift(0);         // Adiciona ao início

// Remover elementos
nums.pop();              // Remove do final
nums.shift();            // Remove do início

// Buscar elementos
console.log(nums.includes(2)); // true
console.log(nums.indexOf(2));  // índice do elemento

// Fatiar
const slice = nums.slice(1, 3); // Retorna novo array

// Emenda
const array = [1, 2];
array.splice(1, 0, 1.5); // Insere 1.5 na posição 1
```

### 5.3 Métodos de Iteração

```javascript
const numeros = [1, 2, 3, 4, 5];

// map: transforma elementos
const dobrados = numeros.map(n => n * 2);

// filter: filtra elementos
const pares = numeros.filter(n => n % 2 === 0);

// reduce: reduz a um único valor
const soma = numeros.reduce((acc, n) => acc + n, 0);

// forEach: itera sem retornar
numeros.forEach(n => console.log(n));

// find: encontra o primeiro elemento
const primeiro = numeros.find(n => n > 3);

// every/some: verifica condição
const todosMaioresDe0 = numeros.every(n => n > 0);
const algumas = numeros.some(n => n > 3);
```

---

## 6️⃣ Objetos

### 6.1 Criação e Acesso

```javascript
const pessoa = {
    nome: "João",
    idade: 30,
    email: "joao@email.com",
    ativo: true
};

// Acesso por propriedade
console.log(pessoa.nome);        // "João"
console.log(pessoa["idade"]);    // 30

// Adicionar propriedade
pessoa.profissao = "Desenvolvedor";

// Deletar propriedade
delete pessoa.ativo;
```

### 6.2 Métodos em Objetos

```javascript
const usuario = {
    nome: "Maria",
    cumprimento: function() {
        console.log(`Olá, ${this.nome}!`);
    }
};

usuario.cumprimento(); // "Olá, Maria!"
```

### 6.3 Object.keys, values, entries

```javascript
const config = { theme: "dark", language: "pt-BR" };

console.log(Object.keys(config));    // ["theme", "language"]
console.log(Object.values(config));  // ["dark", "pt-BR"]
console.log(Object.entries(config)); // [["theme", "dark"], ["language", "pt-BR"]]
```

---

## 7️⃣ Funções

### 7.1 Declaração

```javascript
// Declaração tradicional
function saudar(nome) {
    return `Olá, ${nome}!`;
}

// Expressão de função
const despedir = function(nome) {
    return `Até logo, ${nome}!`;
};

// Arrow function
const apresentar = (nome) => `Sou ${nome}`;
const simples = () => "Sem parâmetros";
```

### 7.2 Parâmetros e Argumentos

```javascript
// Parâmetro padrão
function calcular(a, b = 10) {
    return a + b;
}

// Rest parameter
function somar(...numeros) {
    return numeros.reduce((acc, n) => acc + n, 0);
}

// Desestruturação
function apresentarPessoa({ nome, idade }) {
    console.log(`${nome} tem ${idade} anos`);
}

apresentarPessoa({ nome: "Ana", idade: 25 });
```

### 7.3 Escopo e Closure

```javascript
function contador() {
    let count = 0;
    
    return function() {
        count++;
        return count;
    };
}

const incrementar = contador();
console.log(incrementar()); // 1
console.log(incrementar()); // 2
```

---

## 8️⃣ JSON

### 8.1 Serialização e Desserialização

```javascript
// Objeto para string JSON
const pessoa = { nome: "João", idade: 30 };
const json = JSON.stringify(pessoa);
console.log(json); // '{"nome":"João","idade":30}'

// String JSON para objeto
const dados = JSON.parse(json);
console.log(dados.nome); // "João"
```

### 8.2 JSON com Formatação

```javascript
const obj = { a: 1, b: { c: 2 } };

// Formatado com indentação
const formatado = JSON.stringify(obj, null, 2);
console.log(formatado);
```

---

## 9️⃣ Manipulação de Strings

### 9.1 Métodos Principais

```javascript
const texto = "JavaScript é incrível";

console.log(texto.length);              // 22
console.log(texto.toUpperCase());       // "JAVASCRIPT É INCRÍVEL"
console.log(texto.toLowerCase());       // "javascript é incrível"
console.log(texto.charAt(0));           // "J"
console.log(texto.indexOf("Script"));   // 4
console.log(texto.substring(0, 4));     // "Java"
console.log(texto.slice(-4));           // "ível"
console.log(texto.split(" "));          // ["JavaScript", "é", "incrível"]
console.log(texto.replace("incrível", "legal")); // "JavaScript é legal"
console.log(texto.trim());              // Remove espaços
console.log(texto.startsWith("Java")); // true
console.log(texto.includes("Script")); // true
```

---

## 🔟 Template Literals

```javascript
const nome = "João";
const idade = 30;
const empresa = "DevSuperior";

const mensagem = `
    Bem-vindo, ${nome}!
    Você tem ${idade} anos.
    Trabalha em ${empresa}.
`;

console.log(mensagem);

// Expressões dentro de templates
const calculo = `2 + 2 = ${2 + 2}`;
```

---

## 1️⃣1️⃣ Tratamento de Erros

### 11.1 Try/Catch/Finally

```javascript
try {
    throw new Error("Erro personalisado");
    // ou uma operação que gera erro
    JSON.parse("JSON inválido");
} catch (erro) {
    console.error("Erro capturado:", erro.message);
} finally {
    console.log("Sempre executa");
}
```

### 11.2 Tipos de Erro

```javascript
// SyntaxError: Erro de sintaxe
// ReferenceError: Variável não definida
// TypeError: Tipo incorreto
// RangeError: Valor fora do intervalo esperado
```

---

## 1️⃣2️⃣ DOM (Introdução)

### 12.1 Seleção de Elementos

```javascript
// Por ID
const elemento = document.getElementById("id");

// Por classe
const elementos = document.querySelectorAll(".classe");

// Por tag
const paragrafos = document.getElementsByTagName("p");

// Query selector (mais flexível)
const btn = document.querySelector("button.primario");
```

### 12.2 Modificação de Elementos

```javascript
const div = document.getElementById("conteudo");

div.textContent = "Novo texto";
div.innerHTML = "<p>HTML aqui</p>";
div.style.color = "blue";
div.classList.add("ativo");
div.setAttribute("data-id", "123");
```

---

## Conclusão

Estes fundamentos são essenciais para desenvolver qualquer aplicação JavaScript. A prática constante e a exploração de recursos avançados complementarão seu aprendizado.
