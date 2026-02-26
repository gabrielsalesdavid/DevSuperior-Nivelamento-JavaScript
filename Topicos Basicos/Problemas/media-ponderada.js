let notes = [6.0, 7.5, 8.0];
let weights = [2, 3, 5];

let weightedSum = 0;
let totalWeight = 0;

for (let i = 0; i < notes.length; i++) {
    weightedSum += notes[i] * weights[i];
    totalWeight += weights[i];
}

let weightedAverage = weightedSum / totalWeight;

console.log(`A média ponderada é: ${weightedAverage.toFixed(2)}`);

// Usando reduce para a média ponderada
let weightedSumReduce = notes.reduce(function (accumulator, note, index) {
    return accumulator + note * weights[index];
}, 0);

let totalWeightReduce = weights.reduce(function (accumulator, weight) {
    return accumulator + weight;
}, 0);

let weightedAverageReduce = weightedSumReduce / totalWeightReduce;

console.log(`A média ponderada usando reduce é: ${weightedAverageReduce.toFixed(2)}`);
