//Practice-1
//Function decleation
console.log(add(10, 20));
function add(num1, num2) {
  return num1 + num2;
}
//Practice-2
// Function expression
const add2 = function (num1, num2) {
  return num1 + num2;
};
//Practice-3
//Arrow Function
const add3 = (num1, num2) => num1 + num2;
console.log(add3(50, 60));

//Practice-4
const multiply = (a, b) => a * b;
console.log(multiply(8, 8));

//Practice-5
const tenTimes = x => x * 10;
console.log(tenTimes(5));

//Practice-6
const addAll = (a, b, c, d, e, f, g, h) => a + b + c + d + e + f + g + h;
// console.log(addAll(10, 20, 30, 40, 50, 60, 70, 80));
const isEven = num => num % 2 == 0;

//Practice-17
const doMath = (x, y) => {
    const sum = x + y;
    const diff = x - y;
    const result = sum * diff;
    return result;
}

const divide = (p, q) => p / q;
//ducument.getElementById("btn").addEventListener("click", () = {})
ducument.getElementById("btn").addEventListener("click", even() = {})