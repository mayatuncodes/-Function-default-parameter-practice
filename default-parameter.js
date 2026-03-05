// Practice-1
function add(num1, num2){
  const  total = num1 + num2;
  console.log(num1, num2, total);
}
 //NAN-->Not a number
add(10, 20); 

// Practice-2
function add2(num1, num2 = 0){
  const total = num1 + num2;
  console.log(num1, num2, total); 
}
add2(10, 60);

// Practice-3
function fullName(first, last){
  const name = first + ' ' + last;
  console.log(name);
}
fullName("Mayatun", "Nesa");

// Practice-4
function surName(first, last = ' '){
  const name = first + ' ' + last;
  console.log(name);
}
surName("Raisa Tasmia Tanha");

// Practice-5
function multiply (x, y){
  const result = x * y;
  console.log(result);
}
multiply (50, 80);

// Practice-6
function addition(a, b = 70){
  const tatalAmount = a + b;
  console.log(tatalAmount);
}
addition (40);
/**
 * String -->''
 * Number --> 0 [for add] 
 * Number --> 1 [for multiyply]
 * array --> []
 * object --> {}
 */