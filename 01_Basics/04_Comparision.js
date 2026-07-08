// console.log(2>1)
// console.log(2<1)
// console.log(2>=1)
// console.log(2==1)
// console.log(2!=1)

// console.log("2">1) 
//this gives true because js converts string to number and then compares

console.log(null > 0) 
// false
console.log(null == 0)
// false
console.log(null >= 0)
// true 
// the reason is that the equality check == and comparisions <, >, <=, >= works different in js.
// comparisions convert null to number 0 and then compare, but equality check does not convert null to number. 
// So null == 0 is false but null >= 0 is true.

// same goes for undefined, except all comparisions with undefined returns false.


console.log("2" === 2)
// === not only check the value but also checks the data type of the values. 