26-4 Arrow function syntax, params, return

Arrow Function:
Arrow Function হলো JavaScript-এর একটি short / modern way ফাংশন লেখার।
👉 সাধারণ function এর ছোট version।

Arrow Function Syntax
const functionName = (parameters) => {
  // code
}

Parameters
Parameters হলো ফাংশনের ভিতরে নেওয়া ইনপুট।

Multiple Params
একাধিক parameter থাকলে comma ব্যবহার করতে হয়।

Return (ফাংশন থেকে value বের করা)
return ব্যবহার করা হয় ফাংশন থেকে value বের করার জন্য।


Short Arrow Function (Implicit Return)
Arrow function এর বড় সুবিধা হলো এক লাইনে return করা যায়।
const add = (a, b) => a + b;
console.log(add(10, 5));


Easy Rule (মাথায় রাখার শর্টকাট)
Arrow Function মনে রাখার 4টা rule:
1️⃣ function keyword লাগে না
2️⃣ => arrow ব্যবহার হয়
3️⃣ এক লাইনের হলে return লাগে না
4️⃣ এক parameter হলে () optional