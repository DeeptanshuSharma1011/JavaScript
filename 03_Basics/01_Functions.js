//DECLARING AND EXECUTION OF FUNCTION

function saymyname(){
    console.log("D")
    console.log("E")
    console.log("E")
    console.log("P")
    console.log("U")
}

//saymyname -> reference of function
//saymyname() -> execution of function

saymyname()

//when we define a function we use the term PARAMETERS
//when we call a function we use the term ARGUMENTS

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2)
// }

addTwoNumbers(3, 4)
addTwoNumbers(3, "4") //as we didn't define any datatype in the parameters, it automaticcaly assumes the other argument is also string
addTwoNumbers(3, "a") 
addTwoNumbers(3, null)

function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result

    return number1 + number2 
}

const result = addTwoNumbers(3, 5)
// console.log("Result:", result)

function loginUserMessage(username = "Sam"){
    if(!username){
        console.log("Please enter a username.")
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage())
console.log(loginUserMessage("Deepu"))