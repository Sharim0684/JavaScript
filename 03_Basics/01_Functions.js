function sayMyName() {   // this is a function
  console.log("S");
  console.log("H");
  console.log("A");
  console.log("R");
  console.log("I");
  console.log("M");
}

// sayMyName()  // call a function and execute it

// function addTwoNumbers(number1, number2) //in js it not necessary to defined it datatype
// {
//     console.log(number1 + number2);
// }

//addTwoNumbers(13,22)
//addTwoNumbers(3,"a")
//addTwoNumbers(3,'3')

function addTwoNumbers(number1, number2)
{
    // let result = number1 + number2
    // return result
    //OR

    return number1 + number2

    console.log(("Sharim"));  // Sharim Does not execute because there is one rule of function that is when you return something in function then after that return statement function does not execute below code
}


const result = addTwoNumbers(3,5)
//console.log("result",result);

function loginUserMessage(username)
{
    return `${username} just logged in `
}

console.log(loginUserMessage("Sharim"));
