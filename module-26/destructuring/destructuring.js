//practice-1
const products ={
    name: "iphone",
    price: 799,
    description: "A smartphone by apple"
};
const newPrice = products.price + 100;
const phoneName = `This is ${products.name}`;

console.log(newPrice);
console.log(phoneName);


//practice-2

const person = {
 name: "Rahim",
 age: 25,
 city: "Dhaka"
};

const {name, age} = person;

console.log(name);
console.log(age);

//practice-3

const {name1, price} = {name1: "Vivo", price: 10000, brand: "vivoBrand"};
console.log(name1);
console.log(price);

//practice-4
const [first, second] = [10, 20, 30, 40, 50];
console.log(first);
console.log(second);
console.log(first, second);



