const myObject = {
    js:'javascript',
    cpp : 'c++',
    rb : "ruby",
    swift : "swift by apple"
}

for (const key in myObject) {
   // console.log(key); // o/p--> js,cpp,rb,swift

   //console.log(`${key} shortcut is for ${myObject[key]}`);
   /* o/p is --> 
    js shortcut is for javascript
    cpp shortcut is for c++
    rb shortcut is for ruby
    swift shortcut is for swift by apple
    */
   
}

const programming = ["js","rb","py","java","cpp"]

for(const key in programming)
{
    //console.log(key); //o/p--> 0 1 2 3 4

   // console.log(programming[key]); // o/p--> js,rb,py,java,cpp

}

const map = new Map()
map.set('IN',"India")
map.set('USA',"united States of America")
map.set('Fr',"France")
map.set('IN',"India")

for(const key in map)
{
    console.log(key);  // o/p --> no output    
}