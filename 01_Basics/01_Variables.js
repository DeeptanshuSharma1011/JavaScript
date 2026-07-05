const accountId = 144553
//const once declared cannot be reassigned to a new value.

let accountEmail = "abc@gmail.com"
var accountPass = "12345"
//let and var are used to declare variables

accountCity = "Jaipur"

//directly assigning the value to a variable without declaring it with var, let or const is not a good practice as it will create a 
//global variable and can lead to unexpected results in the code.

// accountId = 2
// this is not allowed as accountId is assigned to a constant variable

console.log(accountId)

console.table([accountId, accountEmail, accountPass, accountCity])

accountEmail = "123@hotmail.com"
accountPass = "98765"
accountCity = "Delhi"
let accountState;
// accountState does not give error as the variable is declared but is not assigned with any value so it goes undefined.

console.table([accountId, accountEmail, accountPass, accountCity, accountState])
//used for running all the variables in a table format in the console at once.
 
/*
Using 'var' is not preferred
Because of issue in block scope and funcitonal scope
*/

/*
we use ";" on our own will, without it also the code runs
in js, it detects the data type on its own like "" -> for string, any number goes for integer

*/