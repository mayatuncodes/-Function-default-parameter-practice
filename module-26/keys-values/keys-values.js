// Object.keys()+Object.values()
//Practice-1
const king = {name: "Mufasa", age: 55, kingdom: "pride-lands"};
const keys = Object.keys(king);
const values = Object.values(king);

console.log(keys);
console.log(values);

//Practice-2
// Object.entries()
const person = {name: "Rahim", age: 25,};
const entries = Object.entries(person);
console.log(entries);

//Practice-3
// delete
const products = {dress:"t-shirt", price: 600, Brand: "Maya"};

 delete products.Brand; 
 console.log(products);

//  Object.seal()
//Practice-4
const person1 = {Name: "Karim", age: 30,};
Object.seal(person1);

person1.age = 25;

console.log(person1);


// Object.freeze()
//Practice-5
const person2 = {
  name: "Rahim",
  age: 25
};

Object.freeze(person2);

person2.age = 30;
person2.city = "Dhaka";

console.log(person2);




