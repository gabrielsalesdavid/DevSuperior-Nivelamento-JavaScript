function f(g, h) {

    if (10 > 0) {
        g("P");
    } else {
        h("Q");
    }
}

function executarSeResolver(value) {

    console.log(`Resolveu com o valor ${value}`);
}

function executarSeRejeitar(reason) {

    console.log(`Rejeitou com a razão ${reason}`);
}

const minhaPromise = new Promise(f);

minhaPromise.then(result => {
    executarSeResolver(result);
}).catch(error => {
    executarSeRejeitar(error);
});