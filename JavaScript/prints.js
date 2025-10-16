// =====================
// الطباعة في JavaScript
// =====================

// ======= أساسي =======
console.log("Hello, World!"); // طباعة نص
console.log(5);               // طباعة رقم
console.log(3.14);            // طباعة رقم عشري
console.log(true);            // طباعة قيمة منطقية


// ======= طباعة عدة قيم =======
let name = "Osama";
let age = 20;
console.log("Name:", name, "Age:", age); // طباعة أكثر من قيمة


// ======= دمج النصوص والأرقام =======
// الطريقة 1: باستخدام الفاصلة في console.log
console.log("Age is", age);

// الطريقة 2: باستخدام الـ Template Literals (المكافئ لـ f-string)
console.log(`My name is ${name} and I am ${age} years old.`);

// الطريقة 3: باستخدام concat()
console.log("My name is ".concat(name, " and I am ", age, " years old."));


// ======= الطباعة بدون سطر جديد =======
// في JavaScript، console.log دائمًا ينتقل لسطر جديد.
// لكن نقدر نستخدم process.stdout.write() في بيئة Node.js فقط:
process.stdout?.write("Hello ");
process.stdout?.write("World\n"); // النتيجة: Hello World


// ======= الطباعة مع فاصل محدد =======
// لا يوجد sep في JavaScript، لكن نقدر نحاكيه بسهولة:
console.log(["A", "B", "C"].join("-")); // النتيجة: A-B-C


// ======= طباعة القيم من العمليات =======
let x = 5;
let y = 3;
console.log("Sum:", x + y);      // Sum: 8
console.log("Product:", x * y);  // Product: 15


// ======= الطباعة من القوائم =======
let fruits = ["apple", "banana", "orange"];
console.log("Fruits list:", fruits);


// ======= الطباعة من القواميس =======
let student = { name: "Osama", age: 20 };
console.log("Student info:", student);
