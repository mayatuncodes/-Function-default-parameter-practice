//Practice-1
const max = Math.max(5, 8, 2, 9, 1);
console.log(max);

//Practice-2
//Spread operator
const numbers = [3, 5, 1, 8, 2, 58, 1];
const max2 = Math.max(...numbers);
console.log(...numbers);

//Practice-3
// Array Max
const number = [10, 50, 20, 90, 30];
const maxNumber = Math.max(...number);
console.log(maxNumber);

//Practice-4
const params = [45, 12, 3];
function sum (x, y, z){
    console.log(x, y, z);
    return x + y +z;
}
const result = sum(...params);
console.log(result);

//Practice-5
const arr1 = [1, 2, 3];
const arr2 = arr1;
arr2.push(4)
console.log(arr1);
console.log(arr2);

//Practice-6
const array1 = [1, 2, 3, 55];
const array2 = [...array1];
array2.push(80)
console.log(array1);
console.log(array2);

