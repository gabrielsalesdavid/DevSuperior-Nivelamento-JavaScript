const person = {
    name: "Alice",
    age: 30,
    city: "New York"
};

const { name, age, city } = person;
console.log(name, age, city);
const numbers = [1, 2, 3, 4, 5];
const [first, second, ...rest] = numbers;
console.log(first, second, rest);
const [a, b] = [10, 20];
console.log(a, b);
const { name: personName, age: personAge } = person;
console.log(personName, personAge);
const { name: n, ...otherDetails } = person;
console.log(n, otherDetails);
const [x, y, z] = [1, 2, 3];
console.log(x, y, z);
const { city: c } = person;
console.log(c);
const [firstNum, , thirdNum] = numbers;
console.log(firstNum, thirdNum);
const { name: fullName, ...info } = person;
console.log(fullName, info);
const [head, ...tail] = numbers;
console.log(head, tail);
const { age: a1, ...restInfo } = person;
console.log(a1, restInfo);
const [firstElement] = numbers;
console.log(firstElement);
const { name: personName2 } = person;
console.log(personName2);
const [, secondElement] = numbers;
console.log(secondElement);
const { city: cityName } = person;
console.log(cityName);
const [, , thirdElement] = numbers;
console.log(thirdElement);
const { name: n2, age: a2, city: c2 } = person;
console.log(n2, a2, c2);
const [firstNum2, secondNum2, ...restNums] = numbers;
console.log(firstNum2, secondNum2, restNums);
const { name: personName3, ...otherInfo } = person;
console.log(personName3, otherInfo);
const [x1, y1, z1] = [10, 20, 30];
console.log(x1, y1, z1);
const { name: n3, age: a3 } = person;
console.log(n3, a3);
const [firstNum3, , thirdNum3] = numbers;
console.log(firstNum3, thirdNum3);
const { city: c3 } = person;
console.log(c3);
const [head2, ...tail2] = numbers;
console.log(head2, tail2);
const { age: a4, ...restInfo2 } = person;
console.log(a4, restInfo2);
const [firstElement2] = numbers;
console.log(firstElement2);
const { name: personName4 } = person;
console.log(personName4);
const [, secondElement2] = numbers;
console.log(secondElement2);
const { city: cityName2 } = person;
console.log(cityName2);
const [, , thirdElement2] = numbers;
console.log(thirdElement2);
const { name: n4, age: a5, city: c4 } = person;
console.log(n4, a5, c4);
const [firstNum4, secondNum4, ...restNums2] = numbers;
console.log(firstNum4, secondNum4, restNums2);
const { name: personName5, ...otherInfo2 } = person;
console.log(personName5, otherInfo2);

// filter
const evenNumbers = numbers.filter(x => x % 2 === 0);
console.log(evenNumbers);

// map
const doubledNumbers = numbers.map(x => x * 2);
console.log(doubledNumbers);

// reduce
const sum = numbers.reduce((acc, x) => acc + x, 0);
console.log(sum);

// sort
const sortedNumbers = numbers.sort((a, b) => b - a);
console.log(sortedNumbers);

// unique
const uniqueNumbers = [...new Set(numbers)];
console.log(uniqueNumbers);

// using functions
const isEven = x => x % 2 === 0;
const evenNumbersUsingFunction = numbers.filter(isEven);
console.log(evenNumbersUsingFunction);

const greaterThanThree = x => x > 3;
const numbersGreaterThanThree = numbers.filter(greaterThanThree);
console.log(numbersGreaterThanThree);

const multiply = (a, b) => a * b;
console.log(multiply(3, 4));

const add = (a, b) => a + b;
console.log(add(5, 7));

const subtract = (a, b) => a - b;
console.log(subtract(10, 3));

const divide = (a, b) => a / b;
console.log(divide(20, 4));

const power = (a, b) => Math.pow(a, b);
console.log(power(2, 3));

const factorial = n => n === 0 ? 1 : n * factorial(n - 1);
console.log(factorial(5));

const fibonacci = n => n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2);
console.log(fibonacci(10));

const isPrime = n => {
    if (n <= 1) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
};
console.log(isPrime(7));

const primesUpToN = n => {
    const primes = [];
    for (let i = 2; i <= n; i++) {
        if (isPrime(i)) primes.push(i);
    }
    return primes;
};
console.log(primesUpToN(20));

const gcd = (a, b) => {
    if (!b) return a;
    return gcd(b, a % b);
};
console.log(gcd(48, 18));