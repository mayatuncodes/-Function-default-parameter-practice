 Looping objects: for...in, for...of

1️⃣ for...in (Object loop করার জন্য)
for...in ব্যবহার করা হয়
👉 Object এর key গুলো loop করার জন্য


2️⃣ for...of (Array loop করার জন্য)
for...of সাধারণত array loop করার জন্য ব্যবহার হয়।


Object এ for...of ব্যবহার করতে চাইলে
Object সরাসরি for...of দিয়ে loop করা যায় না।
তাই Object.entries() / Object.keys() ব্যবহার করতে হয়।



Easy Trick (মনে রাখার জন্য)
for...in → key
for...of → value


Quick Note :
for (const key in object) {
   console.log(object[key]);
}
Array Loop
for (const item of array) {
   console.log(item);
}