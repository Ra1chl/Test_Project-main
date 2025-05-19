function Kvetina(nazev, barva, cena) {
    this.nazev = nazev;
    this.barva = barva;
    this.cena = cena;
}

let ruze = new Kvetina("Růže", "červená", 50);
let tulipan = new Kvetina("Tulipán", "žlutý", 30);
let narcis = new Kvetina("Narcis", "bílý", 20);
let kvetiny = [ruze, tulipan, narcis];

function totalPrice(kvetiny){
    let totalPrice = 0;

    for(kvetina of kvetiny){
        totalPrice += kvetina.cena;
    }
    return totalPrice;
}

console.log("Seznam květin:" + kvetiny.map(kvetina => `\n${kvetina.nazev} - ${kvetina.barva} - ${kvetina.cena} Kč`));

console.log(`Celková cena květin: ${totalPrice(kvetiny)} Kč`);


let jmeno = "Jan";
console.log(typeof jmeno);
console.log(`Ahoj ${jmeno}, vítej v našem květinářství!`);
console.log(`Prvni pismeno v mem jmenu je `+ jmeno.charAt(0));


let test = "Java Script language";
console.log(test.length);
console.log(test.slice(0, 4));
console.log(test.split(` `));


// Vytvoření objektu
let auto = {
    znacka: "Škoda",
    model: "Octavia",
    rokVyroby: 2020,
    barva: "modrá",
    cena: 500000
};
// Přístup k vlastnostem objektu
console.log("Značka: " + auto.znacka);
delete auto.znacka;
console.log("Značka: " + auto.znacka);

console.log("Model: " + auto.model);

//Pole 
let days = ["pondeli", "utery", "streda", "ctvrtek", "patek", "sobota", "nedele"];
console.log(days[0]);
console.log(days.indexOf("streda"));

let  names  =  [["Olivia",  "Emma",  "Mia",  "Sofia"],  ["William",  "James",  "Daniel"]];
console.log(names[0]);  //  ->  ["Olivia",  "Emma",  "Mia",  "Sofia"]
console.log(names[0][1]);  //  ->  Emma
console.log(names[1][1]);  //  ->  James
   
let  users  =[  
         {
                 name:  "Calvin",
                 surname:  "Hart",
                 age:  66,
                 email:  "CalvinMHart@teleworm.us"
         },
         {
                 name:  "Mateus",
                 surname:  "Pinto",
                 age:  21,
                 email:  "MateusPinto@dayrep.com"
         }
];
   
console.log(users[0].name);  //  ->  Calvin
console.log(users[1].age);  //  ->  21


//Slice = vytvoření podpole
let fruits = ["jablko", "banan", "hruska", "pomeranc", "broskev"];
let slicedFruits = fruits.slice(1, 4); // Vytvoří podpole od indexu 1 do indexu 4 (ne včetně)
console.log(slicedFruits); // ["banan", "hruska", "pomeranc"]


let tickets = {
    from: "Praha",
    to: "Brno",
    price: 500,
}

console.log(tickets.from);
console.log(tickets.to);
console.log(tickets.price);

let books = [
    {
        title: "Kniha 1",
        author: "Autor 1",
        year: 2020,
    },
    {
        title: "Kniha 2",
        author: "Autor 2",
        year: 2021,
    },
    {
        title: "Kniha 3",
        author: "Autor 3",
        year: 2022,
    },
];

let newBook = {
    title: "Kniha 4",
    author: "Autor 4",
    year: 2023,
};
books.push(newBook);
console.log(books);

let bookshelf = books.slice(-2); // Vytvoří podpole posledních dvou knih);
console.log(bookshelf);

let age = 32;
age = age + 1;
console.log(age);

let car = {
    brand: "Škoda",
    model: "Octavia",
    year: 2020,
    color: "modrá",
};
console.log(car.brand);