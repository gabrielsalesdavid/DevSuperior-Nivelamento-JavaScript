const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function main() {
    console.log("Início");
    await delay(2000);
    console.log("Fim");
}

main();

// Saída:
// Início
// (após 2 segundos)
// Fim

// Explicação:
// A função `delay` retorna uma Promise que é resolvida após um tempo especificado (ms).
// A função `main` é declarada como `async`, o que permite o uso de `await` dentro dela.
// Quando `await delay(2000)` é executado, a execução da função `main` é pausada até que a Promise retornada por `delay` seja resolvida (após 2 segundos).
// Após a resolução da Promise, a execução continua e "Fim" é impresso no console.