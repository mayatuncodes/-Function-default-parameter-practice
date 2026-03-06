26-5 Spread operator, array max, copy arrays

1️⃣ Spread Operator (...)
Spread Operator (...) ব্যবহার করা হয় array বা object এর ভ্যালুগুলো আলাদা করে ছড়িয়ে দিতে।
Syntax
...
Example
const numbers = [10, 20, 30];
console.log(...numbers);
👉 এখানে array এর ভিতরের ভ্যালুগুলো spread হয়ে গেছে।


2️⃣ Array Max (Array থেকে সবচেয়ে বড় সংখ্যা বের করা)
Spread Operator ব্যবহার করে খুব সহজে array থেকে maximum number বের করা যায়।
Example
const numbers = [10, 50, 20, 90, 30];
const maxNumber = Math.max(...numbers);
console.log(maxNumber);

এখানে Math.max() হচ্ছে JavaScript এর একটি built-in method।
🔹 এর কাজ
Math.max() অনেকগুলো সংখ্যার মধ্যে সবচেয়ে বড় সংখ্যা বের করে।

3️⃣ Copy Arrays
Spread Operator দিয়ে array copy করা যায়।

Example
const numbers = [10, 20, 30];
const newNumbers = [...numbers];
console.log(newNumbers);