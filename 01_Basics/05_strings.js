const name = "Sharim"
const repoCount = 10
//console.log(name + repoCount + "Value");

console.log(`Hello my name ${name} and repo count is ${repoCount}`);

const gameName = new String('Sharim')

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase())
console.log(gameName.charAt(4));
console.log(gameName.indexOf('i'));


const newString = gameName.substring(0,5)
console.log(newString);


const anotherString = gameName.slice(-6 , 4)  // in that we can also used negative indexing like -5 to 1
console.log(anotherString);

const newStringOne = "  Sharim  "
console.log(newStringOne);
console.log(newStringOne.trim());


const url = "https://Sharim.com/Sharim%1322Shaikh"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));
