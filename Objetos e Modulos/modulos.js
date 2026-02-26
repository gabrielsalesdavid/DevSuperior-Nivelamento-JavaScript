function sum(num01, num02) {

    return num01 + num02;
}

function exp(base, expoent) {

    return base ** expoent;
}

function round(value, precison) {

    var multiplier = Math.pow(10, precison || 0);
    return Math.round(value * multiplier) / multiplier;
}

export { sum, exp, round };

sum(5, 10);
exp(2, 3);
round(3.14159, 2);

console.log(sum);
console.log(exp);
console.log(round);