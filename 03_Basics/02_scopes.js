// {}  // this is scope
let a = 300

if (true) {
  let a = 10
  const b = 20
  console.log("Inner: ",a);
}

 console.log(a);  // we can't access a outside the if block
// console.log(b); // we can't acccess b outside the if block
//console.log(c);  // we access c outside the if block


