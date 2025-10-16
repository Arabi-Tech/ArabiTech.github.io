// =====================
// Functions in JavaScript
// =====================

// ====== 1. دالة بسيطة ======
function sayHello() {
    console.log("Hello, World!");
}

sayHello(); // استدعاء الدالة


// ====== 2. دالة مع معامل (Parameter) ======
function greet(name) {
    console.log(`Hello, ${name}!`);
}

greet("Osama");
greet("Ali");


// ====== 3. دالة تعيد قيمة (Return) ======
function addNumbers(a, b) {
    return a + b;
}

let result = addNumbers(5, 7);
console.log("Sum:", result);


// ====== 4. دالة مع قيمة افتراضية للمعامل ======
function greetUser(name = "Guest") {
    console.log(`Welcome, ${name}!`);
}

greetUser();        // يستعمل القيمة الافتراضية Guest
greetUser("Sara");  // يستعمل القيمة الجديدة


// ====== 5. دالة مع عدة معاملات (args) ======
function printNumbers(...numbers) {
    for (let num of numbers) {
        console.log(num);
    }
}

printNumbers(1, 2, 3, 4);


// ====== 6. دالة مع معاملات مسماة (kwargs) ======
function printInfo(info) {
    for (let key in info) {
        console.log(`${key}: ${info[key]}`);
    }
}

printInfo({ name: "Osama", age: 20, country: "Saudi Arabia" });


// ====== 7. دالة داخل دالة (Nested Function) ======
function outer() {
    console.log("Outer function");

    function inner() {
        console.log("Inner function");
    }

    inner();
}

outer();


// ====== 8. دالة مجهولة (Arrow Function - Lambda) ======
const multiply = (x, y) => x * y;
console.log("Lambda Multiply:", multiply(5, 3));


// ====== 9. دالة مع توثيق (Docstring) ======
/**
 * دالة ترجع مربع العدد
 * @param {number} n - الرقم
 * @return {number} مربع الرقم
 */
function square(n) {
    return n ** 2;
}

console.log(square(4));
console.log("التوثيق: دالة ترجع مربع العدد");
