26-7 Keys, values, entries, delete, seal, freeze

1️⃣ Object.keys()
Object.keys() ব্যবহার করা হয়
👉 object এর সব key বের করার জন্য
Example:
const person = {
  name: "Rahim",
  age: 25,
  city: "Dhaka"
};

const keys = Object.keys(person);

console.log(keys);//["name", "age", "city"]
👉 শুধু key গুলো array আকারে দেয়।

2️⃣ Object.values()
Object.values() ব্যবহার করা হয়
👉 object এর সব value বের করার জন্য

Example:
const person = {
  name: "Rahim",
  age: 25,
  city: "Dhaka"
};

const values = Object.values(person);

console.log(values);//["Rahim", 25, "Dhaka"]
👉 শুধু value গুলো array আকারে দেয়।


3️⃣ Object.entries()
Object.entries() ব্যবহার করা হয়
👉 key + value pair একসাথে পাওয়ার জন্য

Example:
const person = {
  name: "Rahim",
  age: 25
};

const entries = Object.entries(person);
console.log(entries);
//output:[["name", "Rahim"],["age", 25]]
👉 array এর ভিতরে array

4️⃣ delete (Property delete করা)
delete দিয়ে object থেকে property মুছে ফেলা যায়।
Example:
const person = {
  name: "Rahim",
  age: 25
};

delete person.age;
console.log(person);//output:{ name: "Rahim" }
👉 age property চলে গেছে।


5️⃣ Object.seal()
Object.seal() করলে

✔ নতুন property add করা যাবে না
✔ property delete করা যাবে না
✔ কিন্তু value change করা যাবে

Example:
const person = {
  name: "Rahim",
  age: 25
};

Object.seal(person);

person.age = 30;      // allowed
person.city = "Dhaka"; // not allowed
delete person.age;     // not allowed

console.log(person);//output:{ name: "Rahim", age: 30 }


6️⃣ Object.freeze()
Object.freeze() করলে object পুরো lock হয়ে যায়।

✔ নতুন property add করা যাবে না
✔ delete করা যাবে না
✔ value change করা যাবে না

Example:
const person = {
  name: "Rahim",
  age: 25
};

Object.freeze(person);

person.age = 30;
person.city = "Dhaka";

console.log(person);//output:{ name: "Rahim", age: 25 }
👉 কিছুই change হয়নি।


Quick Note 
Object Methods:
Object.keys() → key বের করে
Object.values() → value বের করে
Object.entries() → key + value pair
delete → property remove
Object.seal() → add/delete বন্ধ
Object.freeze() → সব change বন্ধ
