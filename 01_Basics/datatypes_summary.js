// Primitive
// 7 types: String, Number, Boolean, Null, Undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3
// examples of number. no need to use int or float in js. js automatically detects the type of number.

const isLoggedIn = false //boolean
const outsideTemp = null //null
let userEmail; //undefined

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId) // false, because symbol is unique. it assigns different values to each symbol even if same description.

// const bigNumber = 1234567890123456789012345678901234567890n
// use of n in the end of the number to represent it as BigInt. 


// Reference (Non-Primitive)
// 3 types: Object, Array, Function


//array
const color = ["red", "green", "blue"]

//object
let myObj = {
    name: "deepu",
    age: 21,
} 

//function
const myFunction = function(){
    console.log("hello world");
} 


//to check the actual datatype of the variable
console.log(typeof color)

// https://262.ecma-international.org/5.1/#sec-11.4.3
// typeof documentation for more information about typeof operator in js.