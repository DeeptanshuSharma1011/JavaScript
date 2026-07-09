//GLOBAL SCOPE
var c = 300
let a = 300

if(true){ //BLOCK(LOCAL) SCOPE
    let a = 10
    const b = 20
    var c = 30 
    console.log("inner a:", a) // 10
    console.log("inner c:", c) //30

}

console.log("outer a:", a) //300
// console.log(b) //undefined
console.log("outer: c", c) //30

//thats why we dont use var. because var was not declared in the scope in which it was consoled.
