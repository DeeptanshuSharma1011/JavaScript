const score = 400
console.log(score)
//400

const balance = new Number(100)
console.log(balance)
//[Number: 100]

// console.log(balance.toString())
//100
// console.log(balance.toString().length) 
//once converted to string now we can operate them with string methods
//3

// console.log(balance.toFixed(2))
//100.00

const otherNumber = 123.8911
// console.log(otherNumber.toPrecision(3))
//123
// console.log(otherNumber.toPrecision(4))
//123.9
// console.log(otherNumber.toPrecision(2))
//120

const hundreds = 10000000
// console.log(hundreds.toLocaleString('en-IN'))
//make the number more readable by adding commas in the right places

//---------------------MATHS------------------------------

// console.log(Math)
// console.log(Math.abs(-4)) //4 (absolute value of the number. makes a negative number positive)
// console.log(Math.round(4.6)) //5 (round-off the number to the nearest)
// console.log(Math.ceil(4.2)) //5 (ceil value of the given number)
// console.log(Math.floor(4.9)) //4 (floor value of the given number)

// console.log(Math.min(4, 5, 6, 7, 8)) //4 (finds the minimum number from the given numbers)
// console.log(Math.max(4, 5, 6, 7, 8)) //8 (finds the maximum number from the given numbers)

console.log(Math.random())
//always gives a random number between 0 and 1

console.log(Math.floor(Math.random() * 10) + 1)
//so that the value does not come as a decimal and is between 1 and 10
//If the number came as 0.0737 then it would give 0.73 which will be out of the range of 1 to 10. So 1 is added to avoid that

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)
//this will give a random number between 10 and 20
// (max - min + 1) is used to define the range
// and min added at last to make sure the number is not less than 10