// For
for (let i = 0; i <= 10; i++) {
  const element = i;
  //console.log(element);  // o/p --> 0 1 2 3 4 5 6 7 8 9 10
  if (element == 5) {
    // console.log("5 is best number");
  }
  // console.log(element);
}

// console.log(element);

for (let i = 0; i <= 10; i++) {
  //console.log(`Outer loop value: ${i}`);
  for (let j = 0; j <= 10; j++) {
    // console.log(`Inner loop value ${j} and inner loop ${i}`);
    //console.log(i + '*' + j + ' = ' + i*j );
  }
}

let myArray = ["flash", "batman", "superman"];
// console.log(myArray.length);

for (let index = 0; index < myArray.length; index++) {
  const element = myArray[index];
 // console.log(element);
}

// break and continue

// for(let i = 0; i<=20;i++)
// {
//   if(i == 13)
//   {
//     console.log(`Detected 5`);
//     break;
//   }
//   console.log(`value of i is ${i}`);
  
// }

for(let i = 0; i<=20;i++)
{
  if(i == 5)
  {
    console.log(`Detected 5`);
    continue;
  }
  console.log(`value of i is ${i}`);
  
}
