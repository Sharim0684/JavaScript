//Date

let myDate = new Date()
console.log(myDate); // 2024-08-09T04:12:07.032Z
console.log(myDate.toString()); //Fri Aug 09 2024 04:13:15 GMT+0000 
  
console.log(myDate.toISOString()); //2024-08-09T04:15:22.864Z

console.log(myDate.toJSON()); //2024-08-09T04:16:53.784Z

console.log(myDate.toDateString()); // Fri Aug 09 2024

console.log(myDate.toLocaleDateString()); // 8/9/2024

console.log(myDate.toLocaleString());  //8/9/2024, 4:20:12 AM

console.log(myDate.toLocaleTimeString()); // 

console.log(myDate.toTimeString()); // 04:26:32 GMT+0000 (Coordinated Universal Time)

console.log(typeof myDate ); //object

let myCreatedDate = new Date(2023, 0,23)
console.log(myCreatedDate.toDateString());  // Mon Jan 23 2023
console.log(myCreatedDate.toLocaleString());  // 1/23/2023, 12:00:00 AM


let myTimeStamp = Date.now()
console.log(myTimeStamp); // 1723179411855

console.log(myCreatedDate.getTime());   // 1674432000000

console.log(Math.floor(Date.now()/1000));  // For Intv ==>  1723179677


let newDate = new Date()
console.log(newDate); // 2024-08-09T05:04:56.761Z
console.log(newDate.getDate()); // 9

console.log(newDate.getMonth()); // 7

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default',{
    weekday: "long",
})




