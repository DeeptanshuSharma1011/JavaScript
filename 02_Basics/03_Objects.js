// if object made from literals it is not a singleton
// if object made from constructor it is a singleton //Object.create

// OBJECT LITERALS

const mySym = Symbol("mykey1")

const jsUser = {
    name: "Deeptanshu",
    age: 18,
    location: "Delhi",
    email: "deepu@gmail.com",
    [mySym]: "mykey1", //syntax for using a symbol in an object while maintaining its datatype
    isLoggedIn: false,
    lastLoginDays: ['Monday', 'Saturday']
}
//behind the scenes: the keys are treated and stored as strings

console.log(jsUser.email) // while using .(method) no need to use ""
console.log(jsUser["email"]) //put in "" as it is a string
console.log(jsUser[mySym])

jsUser.email = "deepu123@gmail.com" //overwrite the value

//freeze the object. will not able to overwrite anything after freezing
Object.freeze(jsUser)
jsUser.email = "deepu@microsoft.com"
console.log(jsUser)

//FUNCTION DECLARE AND ACCESS

jsUser.greeting = function(){
    console.log("Hello JS user");
}

jsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(jsUser.greeting);
//function is not executed just the reference is passed

// `${}` -> string interpolation

console.log(jsUser.greeting()) // Hello JS user
console.log(jsUser.greetingTwo()) // Hello JS user, Deeptanshu
