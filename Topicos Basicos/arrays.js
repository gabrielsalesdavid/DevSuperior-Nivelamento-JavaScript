// Arrays em JavaScript
// Um array é uma estrutura de dados que pode armazenar múltiplos valores em uma única variável.

// Criando um array
let frutas = ['maçã', 'banana', 'laranja'];

// Acessando elementos do array
console.log(frutas[0]); // Output: maçã
console.log(frutas[1]); // Output: banana

// Adicionando elementos ao array
frutas.push('uva'); // Adiciona 'uva' ao final do array
console.log(frutas); // Output: ['maçã', 'banana', 'laranja', 'uva']

// Removendo o último elemento do array
let ultimaFruta = frutas.pop(); // Remove 'uva'
console.log(ultimaFruta); // Output: uva
console.log(frutas); // Output: ['maçã', 'banana', 'laranja']

// Iterando sobre um array
for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}

// Usando forEach para iterar sobre o array
frutas.forEach(function (fruta) {
    console.log(fruta);
});

// Encontrando o índice de um elemento
let indiceBanana = frutas.indexOf('banana');
console.log(indiceBanana); // Output: 1

// Verificando se um elemento existe no array
let temLaranja = frutas.includes('laranja');
console.log(temLaranja); // Output: true

// Convertendo um array em string
let frutasString = frutas.join(', ');
console.log(frutasString); // Output: maçã, banana, laranja

// Criando um array multidimensional
let matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(matriz[1][2]); // Output: 6

// Usando métodos de array como map, filter e reduce
let numeros = [1, 2, 3, 4, 5];

// Usando map para criar um novo array com os números ao quadrado
let quadrados = numeros.map(function (num) {
    return num * num;
});
console.log(quadrados); // Output: [1, 4, 9, 16, 25]

// Usando filter para criar um novo array com números pares
let pares = numeros.filter(function (num) {
    return num % 2 === 0;
});
console.log(pares); // Output: [2, 4]

// Usando reduce para somar todos os números do array
let soma = numeros.reduce(function (total, num) {
    return total + num;
}, 0);
console.log(soma); // Output: 15
// Arrays são uma parte fundamental do JavaScript e oferecem muitas funcionalidades úteis para manipulação de dados.