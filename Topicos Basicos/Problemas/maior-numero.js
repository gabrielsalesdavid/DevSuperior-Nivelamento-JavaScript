let numbers = [5.5, 7, 4.23, 9.1, 7.3];
let maior = numbers[0];

numbers.forEach(function (num) {
    if (num > maior) {
        maior = num;
    }
});

console.log(`O maior número é: ${maior}`);
console.log(pares); // Output: [2, 4]

// Usando reduce para somar todos os números do array
let soma = numeros.reduce(function (acumulador, num) {
    return acumulador + num;
}, 0);
console.log(soma); // Output: 15