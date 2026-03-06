// practice-1
const firstName = "Kamrujjaman";
const lastName = "shuvo";

const aboutMe = `My name is ${firstName}`;
console.log(aboutMe);

// practice-2
const num1 = 10;
const num2 = 20;
const result = `The sum of ${num1} and ${num2} is ${num1 + num2}`;
console.log(result);

// practice-3
const number1 = 50;
const number2 = 30;
const giveMe = `Give me money ${(50 + 30) * 2 + 500}`
console.log(giveMe);

// practice-4
function getCardHtml(name, descrption, price){
    const div = `
    <div class ="card">
    <h2>${name}</h2>
    <p>price: $ ${price}</p>
    <p>${descrption}</p>
    </div>
    `;
    console.log(div);
}
getCardHtml("Mango", "A sweet and juicy fruit", 120);
getCardHtml("Banana", "Rich in potassium", 60);
getCardHtml("Apple", "Keeps the doctor away", 80);