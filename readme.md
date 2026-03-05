avaScript Function Practice

এই ফাইলে আমি JavaScript এর Function, Parameter, Default Parameter, এবং Basic Operations প্র্যাকটিস করেছি।

<!-- Practice 1: Simple Addition Function -->
function add(num1, num2){
  const total = num1 + num2;
  console.log(num1, num2, total);
}

add(10, 20);
ব্যাখ্যা
add নামে একটি ফাংশন তৈরি করা হয়েছে।
এখানে num1 এবং num2 দুটি parameter।
ফাংশনের ভিতরে num1 + num2 যোগ করে total নামে একটি ভ্যারিয়েবলে রাখা হয়েছে।
console.log() দিয়ে num1, num2, এবং total প্রিন্ট করা হয়েছে।
Output
10 20 30

<!-- Practice 2: Default Parameter -->
function add2(num1, num2 = 0){
  const total = num1 + num2;
  console.log(num1, num2, total); 
}

add2(10, 60);
ব্যাখ্যা
এখানে num2 = 0 একটি default parameter।
যদি num2 না দেওয়া হয়, তাহলে JavaScript স্বয়ংক্রিয়ভাবে 0 ব্যবহার করবে।
কিন্তু এখানে আমরা 60 পাঠিয়েছি, তাই num2 = 60 হয়েছে।
Output
10 60 70


<!-- Practice 3: Full Name Function -->
function fullName(first, last){
  const name = first + ' ' + last;
  console.log(name);
}

fullName("Mayatun", "Nesa");
ব্যাখ্যা
first এবং last দুটি নাম নেওয়া হয়েছে।
তাদের মাঝখানে একটি space (' ') দিয়ে একসাথে যুক্ত করা হয়েছে।
এটাকে string concatenation বলে।
Output
Mayatun Nesa


<!-- Practice 4: Default String Parameter -->
function surName(first, last = ' '){
  const name = first + ' ' + last;
  console.log(name);
}

surName("Raisa Tasmia Tanha");
ব্যাখ্যা
এখানে last এর default value হিসেবে একটি space রাখা হয়েছে।
যখন শুধু একটি argument পাঠানো হয়েছে, তখন last এর default value ব্যবহার
হয়েছে।
Output
Raisa Tasmia Tanha


<!-- Practice 5: Multiplication Function -->
function multiply (x, y){
  const result = x * y;
  console.log(result);
}

multiply (50, 80);
ব্যাখ্যা
multiply নামে একটি ফাংশন তৈরি করা হয়েছে।
এখানে x এবং y দুটি সংখ্যা গুণ করা হয়েছে।
ফলাফল result এ রাখা হয়েছে এবং console এ দেখানো হয়েছে।
Output
4000


<!-- Practice 6: Default Number Parameter -->

function addition(a, b = 70){
  const totalAmount = a + b;
  console.log(totalAmount);
}

addition(40);
ব্যাখ্যা
এখানে b এর default value 70।
আমরা শুধু 40 পাঠিয়েছি।
তাই JavaScript ধরে নিয়েছে:
a = 40
b = 70
Output
110

<!-- Default Value Reference -->
<!-- JavaScript এ বিভিন্ন টাইপের জন্য সাধারণত এই default value ব্যবহার করা হয়: -->
<!--  -->
<!-- String  → '' -->
<!-- Number  → 0 (addition এর জন্য) -->
<!-- Number  → 1 (multiplication এর জন্য) -->
<!-- Array   → [] -->
<!-- Object  → {} -->

✅ এই প্র্যাকটিস থেকে আমি শিখেছি:

Function declaration
Function call
Parameters
Default parameters
Basic operations (addition, multiplication)
String concatenation