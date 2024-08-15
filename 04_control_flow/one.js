/* 
if(true)
{
}

comparison operator --> <, >, <=, >=, ==, !=, (=== also check datatype)
*/

const isuserloggedIn = true
const temperature = 41

// if(temperature === 41)
// {
//     console.log("less than 50");
// } else {
//     console.log("temperature is greater than 50"); 
// }
// console.log("Execute");


const score = 200

// if( score > 100)
// {
//     let power = "fly"
//     console.log(`User power : ${power}`);
// }

// console.log(`User power : ${power}`);  // if we write var then wee can access that statement outside the block and if we used const,let we can't access this statement outside the block
// note that we only used two keyword in that block 1st is const and 2nd one is let
 

// ====================
// short hand notation

const balance = 1000
// if(balance > 500) console.log("test1"),console.log("test2");  // don't used this type



// if(balance < 500)
// {
//     console.log("less than 500");
// } else if( balance < 750)
// {
//     console.log("less than 750");
// } else if( balance < 900)
// {
//     console.log("less than 900");
// }
// else
// {
//     console.log("less tha 1200");
// }


const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(userLoggedIn && debitCard && 2==3)
{
    console.log("allow to buy course");
    
}

if(loggedInFromGoogle || loggedInFromEmail )
{
    console.log("User Logged in");
}