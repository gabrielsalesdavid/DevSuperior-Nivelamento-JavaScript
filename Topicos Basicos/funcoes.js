// Funções em JavaScript
function greet(name) {
    return `Hello, ${name}!`;
}

const message = greet("Alice");
console.log(message); // Output: Hello, Alice!

// Função anônima atribuída a uma variável
const add = function (a, b) {
    return a + b;
};

const sum = add(5, 3);
console.log(`Sum: ${sum}`); // Output: Sum: 8

// Função arrow
const multiply = (x, y) => x * y;

const product = multiply(4, 6);
console.log(`Product: ${product}`); // Output: Product: 24

// Função com valor padrão
function power(base, exponent = 2) {
    return Math.pow(base, exponent);
}

console.log(`Power: ${power(3)}`); // Output: Power: 9
console.log(`Power: ${power(2, 3)}`); // Output: Power: 8

// Função recursiva
function factorial(n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}

console.log(`Factorial of 5: ${factorial(5)}`); // Output: Factorial of 5: 120

// Função imediata (IIFE)
(function () {
    console.log("This is an immediately invoked function expression!");
})();
// Output: This is an immediately invoked function expression!

// Função com parâmetros rest
function sumAll(...numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}

console.log(`Sum All: ${sumAll(1, 2, 3, 4, 5)}`); // Output: Sum All: 15

// Função com destructuring de objeto
function displayUser({ name, age }) {
    console.log(`Name: ${name}, Age: ${age}`);
}

const user = { name: "Bob", age: 30 };
displayUser(user); // Output: Name: Bob, Age: 30

// Função com callback
function fetchData(callback) {
    setTimeout(() => {
        const data = { id: 1, message: "Data fetched!" };
        callback(data);
    }, 1000);
}

fetchData(function (data) {
    console.log(data.message); // Output after 1 second: Data fetched!
});

// Função com JSON
const newUserObj = {
    name: "Charlie",
    age: 28,
    email: "charlie@example.com",
    roles: ["admin", "editor"]
};

newUserObj.email = "charlie.updated@example.com";
const newUserJsonString = JSON.stringify(newUserObj);
console.log(newUserJsonString);

const nestedJsonString = `{
    "library": {
        "name": "City Library",
        "location": "Downtown",
        "books": [
            {
                "title": "JavaScript Basics",
                "author": "John Doe",
                "genres": ["Programming", "Web Development"]
            },
            {
                "title": "Advanced JSON",
                "author": "Jane Smith",
                "genres": ["Data Formats", "APIs"]
            }
        ]
    }
}`;
const nestedObj = JSON.parse(nestedJsonString);
console.log(`Library Name: ${nestedObj.library.name}`);

nestedObj.library.books.forEach(function (book) {
    console.log(`Title: ${book.title}, Author: ${book.author}`);
    console.log(`Genres: ${book.genres.join(", ")}`);
});

const nestedJsonStringified = JSON.stringify(nestedObj);
console.log(nestedJsonStringified);
productsArray.forEach(function (product) {
    console.log(`Product: ${product.product}, Price: ${product.price}`);
});

const discountedProducts = productsArray.map(function (product) {
    return {
        product: product.product,
        price: product.price * 0.9 // 10% discount
    };
});

const discountedJsonString = JSON.stringify(discountedProducts);
console.log(discountedJsonString);

const discountedJsonString01 = JSON.stringify(discountedProducts);
console.log(discountedJsonString01);
productsArray.forEach(function (product) {
    console.log(`Product: ${product.product}, Price: ${product.price}`);
});