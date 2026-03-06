26-3 Template string, multiline string, dynamic string

1️⃣Template String:
Template String হলো এমন একটি string যেটা backtick (``) দিয়ে লেখা হয়।
const name = "Rahim";

const text = `Hello ${name}`;
console.log(text);//output:Hello Rahim

এখানে কি হচ্ছে?

${} এর ভিতরে আমরা variable বা expression লিখতে পারি
JavaScript সেটাকে value দিয়ে replace করে দেয়
${} → এটাকে বলে string interpolation

2️⃣ Dynamic String:
যে string এর ভিতরে variable বা calculation ব্যবহার করা হয়, তাকে Dynamic String বলে।
const name = "Karim";
const age = 25;

const message = `My name is ${name} and I am ${age} years old`;
console.log(message);//output:My name is Karim and I am 25 years old
এখানে কি হলো?

${name} → variable value বসলো
${age} → variable value বসলো

এই কারণে এটাকে Dynamic String বলে।

3️⃣ Multiline String:
একটা string যদি একাধিক লাইনে লেখা যায়, তাহলে তাকে Multiline String বলে।


✅ এক লাইনে মনে রাখার ট্রিক

Backtick (``) ব্যবহার করলে string অনেক লাইনে লেখা যায় = Multiline String

Note:Template String এর ভিতরে Dynamic String চেনার প্রধান উপায় হলো ${} (ডলার সাইন + কার্লি ব্র্যাকেট)।