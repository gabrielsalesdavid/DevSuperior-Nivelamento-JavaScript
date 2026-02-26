const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = numbers.map(x => x * 2);
console.log(doubledNumbers);

const evenNumbers = numbers.filter(x => x % 2 === 0);
console.log(evenNumbers);

const sum = numbers.reduce((acc, x) => acc + x, 0);
console.log(sum);

const sortedNumbers = numbers.sort((a, b) => b - a);
console.log(sortedNumbers);
const uniqueNumbers = [...new Set(numbers)];
console.log(uniqueNumbers);

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

const lcm = (a, b) => (a * b) / gcd(a, b);
console.log(lcm(12, 15));

const reverseString = str => str.split('').reverse().join('');
console.log(reverseString('Hello, World!'));

const isPalindrome = str => {
    const cleanedStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    return cleanedStr === cleanedStr.split('').reverse().join('');
};
console.log(isPalindrome('A man, a plan, a canal: Panama'));