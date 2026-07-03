let score = "33abc"

console.log(typeof score)
console.log(typeof(score))

let valueInNumber = Number(score) //converts the value into number
console.log(typeof valueInNumber)
console.log(valueInNumber) //NaN => not a number

// "33" => 33
// "33abc" => NaN
// true => 1; false => 0
// null => 0
// undefined => NaN

let IsLoggedIn = 1

let BooleanIsLoggedIn = Boolean(IsLoggedIn) // converts the number into boolean
console.log(BooleanIsLoggedIn)

// 1 => true; 0 => false
// "" (empty string) => false
// "deepu" => true


let SomeNumber = 33

let StringNumber = String(SomeNumber) // converts the number into string
console.log(StringNumber)
console.log(typeof StringNumber)


let value = 3
let negvalue = -value
//console.log(negvalue);


//console.log(2+2)
//console.log(2-2)
//console.log(2/2)
//console.log(2*2)
//console.log(2**3) //power
//console.log(2%2) //remainder

let str2 = "hello"
let str2 = " deepu"
sr3 = str1 + str2
console.log(str3);

//PREFIX AND POSTFIX INCREMENT AND DECREMENT OPERATORS

let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"