const user =
{
    username: "Sharim",
    price: 999,
    
    welcomMessage: function()
    {
        console.log(`${this.username},welcome to website`);
        console.log(this);
        
    }
}

// user.welcomMessage()  // o/p-->Sharim,welcome to website
// user.username = "Sam"
// user.welcomMessage()  // o/p --> Sam,welcome to website

// console.log(this);  // o/p --> {}

// function chai()
// {
//     let username = "Sharim"
//     console.log(this.username);  // o/p --> undefined
    
// }

// chai()

// const chai = function()
// {
//     let username = "Sharim"
//     console.log(this.username);    
// }

const chai = () => {
    let username = "Sharim"
    //console.log(this.username);  // o/p --> undefined
    console.log(this); // o/p --> {} 
}

// chai()


//explicit return
// const addTwo = (num1,num2) => {
//     return num1 + num2  // in curly brace we used return 
// }


// Implicit return

//const addTwo = (num1,num2) => num1 + num2  // in that we can't used return

//const addTwo = (num1,num2) => (num1 + num2)    // in that also we can't used return 

// object return
//const addTwo = (num1,num2) => (username:"Sharim")   // o/p--> undefined
const addTwo = (num1, num2) => ({username:"Sharim"})   //o/p-->{ username: 'Sharim' }

console.log(addTwo(3,4));


const myArray = [2,3,45,2,5]
//myArray.forEach(function () {})

// myArray.forEach(() => {})
// myArray.forEach(() => ())
myArray.forEach()