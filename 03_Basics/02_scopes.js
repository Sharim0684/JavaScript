// {}  // this is scope
let a = 300

if (true) {
  let a = 10
  const b = 20
  //console.log("Inner: ",a);
}

 //console.log(a);  // we can't access a outside the if block
// console.log(b); // we can't acccess b outside the if block
//console.log(c);  // we access c outside the if block

function one()
{
  const username = "Sharim"

  function two()
  {
    const website = "Youtube"
    console.log(username);
  }
  // console.log(website);  can't access outside the function
  two()
}

//one()
if(true)
{
  const username ="Sharim"
  if(username==="Sharim")
  {
    const website = " Youtube"
    //console.log(username + website);  // o/p --> Sharim Youtube
  }
  // console.log(website); //Error can't access outside 
}
// console.log(username);  // Error can't access outside



// ++++++++++++++++++ interesting ++++++++++++++++++

console.log(addone(5))  // o/p--> 6
function addone(num)
{
  return num + 1
}


addTwo(5)  
const addTwo = function(num)  // Error in the function we store function in varible that why it give us error
{
  return num + 2
}

