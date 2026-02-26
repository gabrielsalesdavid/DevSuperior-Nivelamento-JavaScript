const obj = {
    name: "Gabriel",
    age: 25,
    greet: function () {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
};

obj.greet();
const anotherObj = {
    name: "Maria",
    age: 30
};

anotherObj.greet = obj.greet;
anotherObj.greet();
function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.greet = function () {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
};

const person1 = new Person("Carlos", 40);
person1.greet();

const person2 = new Person("Ana", 35);
person2.greet();

// Exemple 1

const product = {
    name: "DeskTop",
    price: 3000.0,
    quantity: 2
}

const Product = function (nmae, price, quantity) {
    this.name = nmae;
    this.price = price;
    this.quantity = quantity;
}

Product.prototype.getTotalPrice = function () {
    return this.price * this.quantity;
}

Product.prototype.add = function (amount) {
    this.quantity += amount;
}

Product.prototype.remove = function (amount) {
    if (amount > this.quantity) {
        console.log("Not enough quantity to remove.");
        return;
    }
    this.quantity -= amount;
}

Product.prototype.getQuantity = function () {
    return this.quantity;
}

const product1 = new Product("Notebook", 5000.0, 1);
console.log(product1.getTotalPrice());

const product2 = new Product("Smartphone", 2000.0, 3);
console.log(product2.getTotalPrice());