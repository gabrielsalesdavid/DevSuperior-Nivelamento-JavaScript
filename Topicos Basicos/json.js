const obj1 = {
    "name": "Gabriel",
    "age": 25,
    "city": "São Paulo"
};

const obj2 = {
    name: "Ana",
    age: 30,
    city: "Rio de Janeiro"
};

const obj3 = {
    id: 1,
    "date": "2024-06-15",
    "items": [
        { "product": "Laptop", "price": 2500 },
        { "product": "Mouse", "price": 50 }
    ],
    "status": "processing",
    "total": 2550,
    client: {
        name: "Carlos",
        loyaltyMember: true
    }
};

console.log(JSON.stringify(obj1));
console.log(JSON.stringify(obj2));
console.log(JSON.stringify(obj3));

// Convertendo JSON para texto vice versa
const jsonText = '{"title":"Aprendendo JSON","author":"Marcos","year":2023}';
const parsedObjFromText = JSON.parse(jsonText);

console.log(parsedObjFromText);
console.log(`Título: ${parsedObjFromText.title}, Autor: ${parsedObjFromText.author}, Ano: ${parsedObjFromText.year}`);

// Convertendo JSON para objetos JavaScript
const jsonString = '{"name":"Mariana","age":28,"city":"Belo Horizonte"}';
const parsedObj = JSON.parse(jsonString);

console.log(parsedObj);
console.log(`Nome: ${parsedObj.name}, Idade: ${parsedObj.age}, Cidade: ${parsedObj.city}`);

// Parse / Stringify com arrays de objetos
const jsonArrayString = '[{"product":"Smartphone","price":1200},{"product":"Headphones","price":200}]';
const parsedArray = JSON.parse(jsonArrayString);

parsedArray.forEach(function (item) {
    console.log(`Produto: ${item.product}, Preço: ${item.price}`);
});

const arrayOfObjects = [
    { product: "Tablet", price: 800 },
    { product: "Charger", price: 100 }
];

const jsonArrayStringified = JSON.stringify(arrayOfObjects);
console.log(jsonArrayStringified);

// Manipulação avançada de JSON
const complexJsonString = `{
    "orderId": 12345,
    "customer": {
        "name": "Luiza",
        "email": "luiza@example.com"
    },
    "items": [
        { "product": "Laptop", "price": 2500 },
        { "product": "Mouse", "price": 50 }
    ],
    "status": "processing",
    "total": 2550
}`;
const complexObj = JSON.parse(complexJsonString);
console.log(`Order ID: ${complexObj.orderId}`);
console.log(`Customer Name: ${complexObj.customer.name}`);
console.log(`Total Amount: ${complexObj.total}`);

complexObj.items.forEach(function (item) {
    console.log(`Item: ${item.product}, Price: ${item.price}`);
});

const updatedJsonString = JSON.stringify(complexObj);
console.log(updatedJsonString);

// Manipulação avançada de JSON com arrays aninhados
const nestedJsonString = `{
    "library": {
        "name": "City Library",
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

// Conversão de JSON para JavaScript e vice-versa
const userJsonString = `{
    "username": "devUser",
    "email": "devuser@example.com",
    "roles": ["admin", "editor"]
}`;
const userObj = JSON.parse(userJsonString);
console.log(`Username: ${userObj.username}, Email: ${userObj.email}`);
console.log(`Roles: ${userObj.roles.join(", ")}`);

const newUserObj = {
    username: "newUser",
    email: "newuser@example.com",
    roles: ["user"]
};

const newUserJsonString = JSON.stringify(newUserObj);
console.log(newUserJsonString);

// Manipulação de JSON com funções de array
const productsJsonString = `[
    { "product": "Monitor", "price": 1500 },
    { "product": "Keyboard", "price": 300 },
    { "product": "Webcam", "price": 400 }
]`;
const productsArray = JSON.parse(productsJsonString);

// Usando map para criar um array de preços com desconto
const discountedPrices = productsArray.map(function (item) {
    return {
        product: item.product,
        discountedPrice: item.price * 0.9 // 10% de desconto
    };
});

console.log("Preços com desconto:");
discountedPrices.forEach(function (item) {
    console.log(`Produto: ${item.product}, Preço com desconto: ${item.discountedPrice}`);
});

// Usando filter para encontrar produtos acima de um certo preço
const expensiveProducts = productsArray.filter(function (item) {
    return item.price > 350;
});

console.log("Produtos caros:");
expensiveProducts.forEach(function (item) {
    console.log(`Produto: ${item.product}, Preço: ${item.price}`);
});

// Usando reduce para calcular o total dos preços
const totalPrice = productsArray.reduce(function (accumulator, item) {
    return accumulator + item.price;
}, 0);

console.log(`Preço total dos produtos: ${totalPrice}`);

// Usando JSON com métodos avançados de array
const employeesJsonString = `[
    { "name": "Pedro", "salary": 3000 },
    { "name": "Maria", "salary": 4500 },
    { "name": "João", "salary": 2500 }
]`;
const employeesArray = JSON.parse(employeesJsonString);

// Usando map para aumentar o salário em 10%
const increasedSalaries = employeesArray.map(function (employee) {
    return {
        name: employee.name,
        salary: employee.salary * 1.1
    };
});

console.log("Salários aumentados:");
increasedSalaries.forEach(function (employee) {
    console.log(`Nome: ${employee.name}, Salário: ${employee.salary}`);
});

// Usando filter para encontrar funcionários com salário acima de 3000
const highEarners = employeesArray.filter(function (employee) {
    return employee.salary > 3000;
});

console.log("Funcionários com salário acima de 3000:");
highEarners.forEach(function (employee) {
    console.log(`Nome: ${employee.name}, Salário: ${employee.salary}`);
});

// Usando reduce para calcular a folha salarial total
const totalPayroll = employeesArray.reduce(function (accumulator, employee) {
    return accumulator + employee.salary;
}, 0);

console.log(`Folha salarial total: ${totalPayroll}`);