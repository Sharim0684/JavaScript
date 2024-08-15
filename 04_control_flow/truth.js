//const userEmail = "s@gmail.com"  // o/p--> got user email
//const userEmail = "" // o/p --> Don't have user email
const userEmail = []  // o/p--> got user email
if(userEmail)
{
    console.log("Got user email");
}
else
{
    console.log("Don't have user email");
}

// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0", 'false', " ", [], {}, function(){}  // if any value add  in string i.e "" then it is a true value

if(userEmail.length === 0)
{
    console.log("Array is Empty");
}

const emptyobj = {}
if(Object.keys(emptyobj).length === 0)
{
    console.log("Object is Empty");
    
}
// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10 // o/p --> 5
// val1 = null ?? 10 // o/p --> 10
// val1 = undefined ?? 15 // o/p --> 15
val1 = null ?? 10 ?? 20  // o/p--> 10
console.log(val1)

// Terniary Operator 

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("Less than 80") : console.log("More than 80");

