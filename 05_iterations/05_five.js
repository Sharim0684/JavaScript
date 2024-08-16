const coding = ["js", "ruby", "java", "python", "Cpp"]

// coding.forEach( function (val){
//     //console.log(val);
    
// })


// coding.forEach( (item) => 
// {
//     console.log(item); //js ruby java python Cpp   
// })


// function printme(item)
// {
//     console.log(item);
    
// }
// coding.forEach(printme)

coding.forEach( (item,index,arr)=> {
    //console.log(item,index,arr);
    /* 
    js 0 [ 'js', 'ruby', 'java', 'python', 'Cpp' ]
    ruby 1 [ 'js', 'ruby', 'java', 'python', 'Cpp' ]
    java 2 [ 'js', 'ruby', 'java', 'python', 'Cpp' ]
    python 3 [ 'js', 'ruby', 'java', 'python', 'Cpp' ]
    Cpp 4 [ 'js', 'ruby', 'java', 'python', 'Cpp' ]
*/
})

const myCoding = [
    {
        languageName: "javascript",
        languageFileName:"js"
    },
    {
        languageName: "java",
        languageFileName:"java"
    },
    {
        languageName: "python",
        languageFileName:"py"
    },
]
 
myCoding.forEach( (item)=> {

//console.log(item.languageName);  //o/P--> javascrit java python
    
console.log(item.languageFileName); // o/p--> js, java, py

})