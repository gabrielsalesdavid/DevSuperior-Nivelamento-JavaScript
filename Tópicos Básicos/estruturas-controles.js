console.log("Estruturas de Controle em JavaScript");
// Estrutura condicional if...else
let idade = 20;

// condição simples
if (idade >= 18) {
    console.log("Você é maior de idade");
}

// condição composta
if (idade < 18) {
    console.log("Menor de idade");
} else {
    console.log("Maior de idade");
}

// condição encadeada
if (idade < 13) {
    console.log("Criança");
} else if (idade >= 13 && idade < 18) {
    console.log("Adolescente");
} else {
    console.log("Adulto");
}

// Estrutura condicional switch
let diaSemana = 3;

switch (diaSemana) {
    case 1:
        console.log("Domingo");
        break;
    case 2:
        console.log("Segunda-feira");
        break;
    case 3:
        console.log("Terça-feira");
        break;
    case 4:
        console.log("Quarta-feira");
        break;
    case 5:
        console.log("Quinta-feira");
        break;
    case 6:
        console.log("Sexta-feira");
        break;
    case 7:
        console.log("Sábado");
        break;
    default:
        console.log("Dia inválido");
}

// Estrutura de repetição for
for (let i = 1; i <= 5; i++) {
    console.log("Contagem: " + i);
}

// função lambda
let name = ["João", "Maria", "Pedro"];
name.forEach(element => {
    console.log(element);
});

let ages = [18, 22, 25];
for (let age of ages) {
    console.log(age);
}

// Estrutura de repetição while
let contador = 1;
while (contador <= 5) {
    console.log("Contador: " + contador);
    contador++;
}

// Estrutura de repetição do...while
let numero = 1;
do {
    console.log("Número: " + numero);
    numero++;
} while (numero <= 5);