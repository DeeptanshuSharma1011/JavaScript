const accountId = 144553
let accountEmail = "abc@gmail.com"
var accountPass = "12345"
accountCity = "Jaipur"

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
 
/*
Using 'var' is not preferred
Because of issue in block scope and funcitonal scope
*/