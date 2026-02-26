function dizerOla() {
    console.log("Olá, mundo!");
}

function dizerBomDia() {
    console.log("Bom dia!");
}

setTimeout(() => {
    dizerBomDia("Maria");
    setTimeout(() => {
        dizerBomDia("João");
    }, 1000);
    setTimeout(() => {
        dizerBomDia("Ana");
    }, 2000);
}, 1000);

dizerOla();

setTimeout(dizerOla, 2000); // Chama a função dizerOla após 2 segundos (2000 milissegundos)

console.log("Essa mensagem será exibida antes de 'Olá, mundo!'");

// não faça isso

function esperar(ms) {
    const end = Date.now() + ms;
    while (Date.now() < end) {
    }
}

console.log("Iniciando espera...");
esperar(2000); // Espera por 2 segundos (2000 milissegundos)
console.log("Esperando terminou!");