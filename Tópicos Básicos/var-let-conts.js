const x = 10;

if (x > 10) {
    var a = 100;
    let b = 200; // let é mutável dentro do bloco
    const c = 300; // const imutável
    console.log(`${x} é maior do que 10`);
    console.log(a);
    console.log(b);
    console.log(c);
}
console.log("Imprimi fora do bloco:")
console.log(a); // var não é recomendado por vazar dados fora do bloco
console.log(b); // Erro de referência: b is not defined
console.log(c); // Erro de referência: b is not defined

console.log("Função for:");
for (let i = 0; i < 5; i++) {
    console.log(i);
}