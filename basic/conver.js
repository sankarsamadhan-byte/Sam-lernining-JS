console.log(typeof 12);               // number
console.log(typeof "Sam");            // string
console.log(typeof true);             // boolean
console.log(typeof false);            // boolean
console.log(typeof undefined);        // undefined
console.log(typeof null);             // object (JavaScript bug)
console.log(typeof 123n);             // bigint
console.log(typeof Symbol("id"));     // symbol

// Objects
console.log(typeof {});               // object
console.log(typeof []);               // object
console.log(typeof new Date());       // object

// Function
function hello() {}
console.log(typeof hello);            // function

// Arrow Function
const add = () => {};
console.log(typeof add);              // function

// Variables
let a = 10;
let b = "Hello";
let c = true;
let d;
let e = null;

console.log(typeof a);                // number
console.log(typeof b);                // string
console.log(typeof c);                // boolean
console.log(typeof d);                // undefined
console.log(typeof e);                // object