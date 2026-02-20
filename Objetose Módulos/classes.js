class Product {

    constructor(name, price, quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }

    add(amount) {
        this.quantity += amount;
    }

    remove(amount) {
        if (amount <= this.quantity) {
            this.quantity -= amount;
        } else {
            console.log("Not enough stock to remove the specified amount.");
        }
    }

    label() {
        return `${this.name} - $${this.price}`;
    }

    totalValue() {
        return this.price * this.quantity;
    }

    toString() {
        return `Product: ${this.name}, Price: ${this.totalValue()}, Quantity: ${this.quantity}`;
    }
}

const Product01 = new Product("Laptop", 1500, 10);
console.log(Product01.toString());

Product01.add(5);
console.log(Product01.toString());

Product01.remove(3);
console.log(Product01.toString());

console.log(Product01.label());