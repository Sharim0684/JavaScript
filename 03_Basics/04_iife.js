// Immediately Invoked Function Expressions (IIFE)

// this is name iife
// function chai()
// {
//     console.log(`DB CONNECTED`);
    
// }
// chai()

// OR

//  this is also a name iife
(function chai ()
{
    console.log(`DB CONNECTED`);
}());

// () () --> 1 block () is used for function defination and second block () is used for execution block

( () => {
    console.log(`DB CONNECTED TWO`);    
})(); // if someone asked you to write two iife in one code then used semicolon at the last of 1st iife 

// this is unnamed iife
( (name) => {
    console.log(`DB CONNECTED THREE ${name}`);
})('Sharim')