// singleton object ==> this is singleton object --> object.create

// object literals
//const jsUser ={}  // this is object created

const mySym = Symbol("Key1")


const jsUser = {
    name: "Sharim",
    "full name": "Shaikh Sharim",
    [mySym]: "mykey1",
    age: 22,
    location: "Pune",
    email: "ss@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"]
}
// how to access object

console.log(jsUser.email);
console.log(jsUser["email"]);
console.log(jsUser["full name"]);
// console.log(jsUser.mySym);
// console.log(typeof jsUser.mySym);
console.log(jsUser[mySym]);

jsUser.email = "sharim@gmail.com"
Object.freeze(jsUser)  // it lock all the value in this object means it can't be changed
jsUser.email = "sharimshaikh@gmail.com"
console.log(jsUser);
JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());