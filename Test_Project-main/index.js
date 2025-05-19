class  Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    display(){
        console.log(`Product Name: ${this.name}`);
        console.log(`Product Price: $${this.price}`);
    }
}

const product1 = new Product("Laptop", 1200);
const product2 = new Product("Smartphone", 800);
const product3 = new Product("Tablet", 600);
const product4 = new Product("Smartwatch", 300);
const product5 = new Product("Headphones", 150);
const product6 = new Product("Charger", 20);
const product7 = new Product("Mouse", 25);
const product8 = new Product("Keyboard", 45);
const product9 = new Product("Monitor", 300);
const product10 = new Product("Printer", 150);
const product11 = new Product("Scanner", 200);
const product12 = new Product("Webcam", 100);
const product13 = new Product("Microphone", 80);


product1.display();
product2.display();
product3.display();
product4.display();
product5.display();
