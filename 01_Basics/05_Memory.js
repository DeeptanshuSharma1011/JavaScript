// Stack (Primitives), Heap (Non-Primitives)

let myName = "deepu" //stores in stack memory

let anotherName = myName
anotherName = "deeptanshu"

console.log(myName) //deepu
console.log(anotherName) //deeptanshu
//make changes in the copy and not in the original


// heap memory
let userOne = {
    email: "user@google.com",
    upi: "user@upi"
}

let userTwo = userOne

userTwo.email = "deepu@google.com"

console.log(userOne.email) //deepu@google.com
console.log(userTwo.email) //deepu@google.com
//make changes in the original