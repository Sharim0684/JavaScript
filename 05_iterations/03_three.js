// for of loop 
/* 
for (variable of iterable) {
  // code block to be executed
} 

for (const element of object) {
    element is like i in for loop 
    and object is like array name
}
*/

// ["", "", ""]
// [{}, {}, {}]

const arr =[1,2,3,4,5]

for (const num of arr) {
    //console.log(num); //o/p--> 1,2,3,4,5
}

const greetings = "Hello world!"
for (const greets of greetings) {
    //console.log(greets); //o/p--> H e l l o  w o r l d !
   // console.log(`Each char is ${greets}`);
    
}

// Maps
const map = new Map()
map.set('IN',"India")
map.set('USA',"united states of America")
map.set('Fr',"France")
map.set('IN',"India")

//console.log(map);  
/*o/p--> Map(3) {'IN' => 'India','USA' => 'united states of America'
'Fr' => 'France'}  */

for (const [key,value] of map) {
   // console.log(key, ':-', value);   
    /* o/p--> IN :- India
USA :- united states of America
Fr :- France*/

}

const myObject = {
    'game1': 'NFS',
    'game2': 'Spiderman'
}

for (const [key,value] of myObject) {
    
    console.log(key, ':-', value);
    
}