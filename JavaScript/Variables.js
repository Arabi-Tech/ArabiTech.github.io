// =====================
// Variables in JavaScript
// =====================

// ======= النصوص =======
let name = "Osama";
let greeting = 'Hello, World!';


// ======= الأرقام =======
// أعداد صحيحة
let num_int = 10;
let num_negative = -5;

// أعداد عشرية (كل الأرقام في JS هي من نوع Number)
let num_float = 3.14;

// أعداد علمية (Scientific Notation)
let num_scientific = 1.5e3; // 1500

// لا يوجد نوع "complex" (عدد مركب) في JavaScript بشكل أصلي
// لكن ممكن نمثلها ككائن:
let num_complex = { real: 2, imag: 3 };
let another_complex = { real: 5, imag: -1 };


// ======= القيم المنطقية =======
let is_student = true;
let is_teacher = false;


// ======= القوائم (Array) =======
let fruits = ["apple", "banana", "orange"];
let numbers = [1, 2, 3, 4, 5];


// ======= الطوابل (Tuple) =======
// لا يوجد نوع Tuple صريح في JS، لكن نقدر نستخدم Array عادية:
let point = [10, 20];
let person = ["Osama", 25, "Saudi"];


// ======= المجموعات (Set) =======
let colors = new Set(["red", "green", "blue"]);
let unique_numbers = new Set([1, 2, 3, 4, 5]);


// ======= المجموعات الثابتة (FrozenSet) =======
// لا يوجد frozen set في JS، لكن ممكن نجمد المجموعة باستخدام Object.freeze():
let frozen_colors = Object.freeze(new Set(["red", "green", "blue"]));


// ======= القواميس (Object / Map) =======
// القواميس العادية
let student = { name: "Osama", age: 20, grade: "A" };
let settings = { theme: "dark", language: "ar" };

// أو يمكننا استخدام Map (أكثر مرونة)
let studentMap = new Map([
  ["name", "Osama"],
  ["age", 20],
  ["grade", "A"]
]);


// ======= المدى / تسلسل الأرقام (Range) =======
// لا يوجد range في JS، لكن يمكن توليده باستخدام Array.from():
let nums = Array.from({ length: 5 }, (_, i) => i + 1); // [1, 2, 3, 4, 5]


// ======= البيانات الثنائية (Binary Types) =======
// في JavaScript، عندنا أنواع بيانات ثنائية مثل ArrayBuffer و Uint8Array
let data_bytes = new TextEncoder().encode("hello");      // Uint8Array
let data_bytearray = new Uint8Array([104, 101, 108, 108, 111]); // 'hello'
let data_memoryview = new DataView(new ArrayBuffer(5));  // عرض ذاكرة خام


// ======= النوع الخاص لا شيء (null / undefined) =======
let result = null;       // لا شيء (مشابه لـ None)
let notDefined;          // undefined (متغير لم يُعطَ قيمة)
