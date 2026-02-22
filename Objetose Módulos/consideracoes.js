import { sum, exp, round } from "./modulos.js";
import * as math from "./modulos.js";

console.log(sum(5, 10));
console.log(exp(2, 3));
console.log(round(3.14159, 2));

console.log(math.sum(5, 10));
console.log(math.exp(2, 3));
console.log(math.round(3.14159, 2));

const obj = new Object();
obj.name = "Notebook";
obj.price = 2500;
obj.brand = "Dell";

console.log(obj);