//---------------------THIS--------------------------

const user = {
    username: "deepu",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`)
        // 'this' used to refer the current context
        console.log(this)
    }
}

user.welcomeMessage()
user.username = "Sam" //as the value was not hard coded
user.welcomeMessage()

console.log(this) // {}

function coffee(){
    let username = "deepu"
    console.log(this.username) //undefined
}

coffee()

//'this' only used in the object not in function

const shake = function(){
    let username = "deepu"
    console.log(this.username) //undefined
}

shake()

//--------------ARROW--------------

const shake = () => {
    let username = "deepu"
    console.log(this.username) //undefined
    console.log(this) //{}
}

shake()

//explicit return (explicitly using return)
const addTwo = (num1, num2) => {
    return num1 + num2   //if curly braces are used then we need to write 'return'
}

console.log(addTwo(3,4))

// //implicit return
const addTwo = (num1, num2) => num1 + num2

console.log(addTwo(3,4))

// //another way
const addTwo = (num1, num2) => (num1 + num2) //if parenthesis are used no need to write 'return'

console.log(addTwo(3,4))

// WHY WE USE PARENTHESIS?
// if we want to return an object you cannot directly return it you need to use parenthesis

const addTwo = (num1, num2) => ({username: "deepu"})
console.log(addTwo(3,4))