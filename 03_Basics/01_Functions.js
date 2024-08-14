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

function loginUserMessage(username = "Sam")  // default value is Sam
{
    if(!username) //OR if(username === undefined)
    {
      console.log("Please enter a username");
      return 
    }
    return `${username} just logged in `
}

//console.log(loginUserMessage("Sharim"));

//console.log(loginUserMessage("Sharim"));  // undefined just logged in

function calculateCartPrice(val1, val2, ...num1)// ...(three Dots) this is an rest operate and also known as spread operator
{
  return num1
}

//console.log(calculateCartPrice(2));
//console.log(calculateCartPrice(200,400,500,2000));  // it means that val1 = 200, val2 = 400 and rest of the value in num1 that why we used rest operator

const user = {
  username:"Sharim",
  price: 199
}

function handleObject(anyobject)
{
  console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}

//handleObject(user)
/*
handleObject({
  username:"Sam",
  price:399    // we can pass an object directly also when we call the function 
})  */

const myNewArray = [200,400,100,600]

function returnSecondValue(getArray)
{
  return getArray[1]
}

//console.log(returnSecondValue(myNewArray));

console.log(returnSecondValue([200,400,500,3000]));
