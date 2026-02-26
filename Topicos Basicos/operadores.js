console.log("Operadores Básicos em JavaScript");

// Operadores Aritméticos
let a = 10;
let b = 5;

console.log(`Soma: ${a + b}`);          // 15
console.log(`Subtração: ${a - b}`);     // 5
console.log(`Multiplicação: ${a * b}`); // 50
console.log(`Divisão: ${a / b}`);       // 2
console.log(`Módulo: ${a % b}`);        // 0

// Operadores de Atribuição
let c = 20;
c += 5; // c = c + 5
console.log(`Atribuição (+=): ${c}`);   // 25

// Operadores de Comparação
console.log(`Igualdade (==): ${a == b}`);       // false
console.log(`Igualdade (===): ${a === b}`);     // false
console.log(`Desigualdade (!=): ${a != b}`);    // true
console.log(`Maior que (>): ${a > b}`);         // true
console.log(`Menor que (<): ${a < b}`);         // false
console.log(`Maior ou igual (>=): ${a >= b}`);  // true
console.log(`Menor ou igual (<=): ${a <= b}`);  // false

// Operadores Lógicos
let x = true;
let y = false;

console.log(`E lógico (&&): ${x && y}`);  // false
console.log(`OU lógico (||): ${x || y}`); // true
console.log(`Negação lógica (!): ${!x}`); // false

// Operadores de Incremento e Decremento
let d = 10;
d++;
console.log(`Incremento (d++): ${d}`); // 11
d--;
console.log(`Decremento (d--): ${d}`); // 10

// Operador Ternário
let idade = 18;
let podeVotar = (idade >= 18) ? "Pode votar" : "Não pode votar";
console.log(`Operador Ternário: ${podeVotar}`); // Pode votar
// Fim dos exemplos de operadores