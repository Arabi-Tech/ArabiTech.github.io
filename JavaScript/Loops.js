// =====================
// Loops in JavaScript
// =====================

// ====== 1. حلقة for مع range ======
console.log("For loop with range:");
for (let i = 0; i < 5; i++) { // 0,1,2,3,4
    console.log(i);
}


// ====== 2. حلقة for على قائمة ======
let fruits = ["apple", "banana", "orange"];
console.log("\nFor loop on a list:");
for (let fruit of fruits) {
    console.log(fruit);
}


// ====== 3. حلقة for مع index ======
console.log("\nFor loop with index:");
fruits.forEach((fruit, index) => {
    console.log(`Index ${index}: ${fruit}`);
});


// ====== 4. حلقة while ======
console.log("\nWhile loop example:");
let count = 0;
while (count < 5) {
    console.log(count);
    count++;
}


// ====== 5. while مع شرط خروج مبكر ======
console.log("\nWhile loop with break:");
let num = 0;
while (true) {
    console.log(num);
    num++;
    if (num === 3) {
        console.log("Breaking the loop");
        break;
    }
}


// ====== 6. while مع continue ======
console.log("\nWhile loop with continue:");
let i = 0;
while (i < 5) {
    i++;
    if (i === 3) {
        console.log("Skipping 3");
        continue;
    }
    console.log(i);
}


// ====== 7. nested loops (الحلقات المتداخلة) ======
console.log("\nNested loops example:");
for (let i = 1; i <= 3; i++) {      // 1,2,3
    for (let j = 1; j <= 3; j++) {  // 1,2,3
        console.log(`i=${i}, j=${j}`);
    }
}


// ====== 8. loop with else ======
// JavaScript ما فيها else بعد loop مثل بايثون، 
// لكن نقدر نحاكيها بهذي الطريقة:
console.log("\nLoop with else:");
let finishedNormally = true;
for (let i = 0; i < 3; i++) {
    console.log(i);
    // لو استخدمنا break هنا بنخلي finishedNormally = false
}
if (finishedNormally) {
    console.log("Loop finished without break");
}


// ====== 9. list comprehension as loop shortcut ======
// في JavaScript نستخدم map() بدلاً من list comprehension
console.log("\nList comprehension example:");
let squares = Array.from({ length: 5 }, (_, x) => x ** 2);
console.log(squares); // [0,1,4,9,16]


// ====== 10. practical example: sum of numbers ======
console.log("\nSum numbers from 1 to 5:");
let total = 0;
for (let n = 1; n <= 5; n++) {
    total += n;
}
console.log("Total:", total);
