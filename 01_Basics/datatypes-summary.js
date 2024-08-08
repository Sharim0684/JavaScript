// 1# primitive Datatype 

// 7 types : String, Number , Boolean , null ,undefined, Symbol, BigInt 

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;  // OR let userEmail = undefined


const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

//const bigNumber = 324254265264354n




// 1# Reference Datatype(Non Premitive)
// Array , Object , Functions.

const heros = ["shaktiman", "naagraj","doga"];
let myobj = {
    name : "Sharim",
    age : 22,
}

const myFuction = function(){
    console.log("Hello world");
}

console.log(typeof bigNumber); // datatype ==> undefined
console.log(typeof outsideTemp);// datatype ==> object
console.log(typeof myFuction);//datatype ==> Function
console.log(typeof heros); // datatype ==>  object
console.log(typeof anotherId); // datatype ==> Symbol
