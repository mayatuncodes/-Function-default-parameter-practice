//practice-1
// for...of
const numbers = [1, 2, 3, 4, 5];

for (const number of numbers) {
  console.log(number);
};



//practice-2

// for...in
const person = {
  name: "Rahim",
  age: 25,
  city: "Dhaka",
};

for (const key in person) {

console.log(key);

//   Value
  console.log(person[key]);

//   Key + Value
  console.log(key, person[key]);
}

//practice-3
