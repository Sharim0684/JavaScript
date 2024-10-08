const score = 400;
console.log(score); //400

const balance = new Number(100);
console.log(balance); //[Number: 100]

console.log(balance.toString().length); //3
console.log(balance.toFixed(2)); // o/p==> 100.00

const otherNumber = 123.896;

console.log(otherNumber.toPrecision(3)); // o/p ==> 124

const hundreads = 1000000;
console.log(hundreads.toLocaleString()); // 1,000,000

console.log(hundreads.toLocaleString("en-IN")); //10,00,000

//+++++++++++ maths +++++++++++++++

console.log(Math); //Object [Math] {}

console.log(Math.abs(-4)); // 4
console.log(Math.round(4.6)); //5
console.log(Math.ceil(4.2)); //5
console.log(Math.floor(4.9)); // 4
console.log(Math.min(4, 3, 6, 8)); //3   
console.log(Math.max(4, 3, 6, 8)); //8

console.log(Math.random()); // random value between o and 1 like 0.24010817696052178
console.log(Math.random() * 10 + 1); // 
console.log(Math.floor(Math.random() * 10) + 1);

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);
