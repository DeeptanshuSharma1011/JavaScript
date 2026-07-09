//-------------------ARRAYS-----------------------

const myArr = [1, 2, 3, 4, 5];
const heros = ["batman", "superman", "spiderman", "ironman"];

const myArr2 = new Array(1,2,3,4,5)

console.log(myArr2) // [1,2,3,4,5]
console.log(heros[3]) // ironman

myArr.push(6) // adds 6 at the end of the array
console.log(myArr) // [1,2,3,4,5,6]

myArr.push(7, 8, 9) // adds 7, 8, 9 at the end of the array
myArr.pop() // removes the last element of the array
console.log(myArr) // [1,2,3,4,5,6,7,8]

myArr.unshift(0) // adds 0 at the start of the array and hsifts all the elements to the right. 
                // which deletes the last element of the array to maintain the size of the array
console.log(myArr) // [0,1,2,3,4,5,6,7,8]
myArr.shift() // removes the first element of the array
console.log(myArr) // [1,2,3,4,5,6,7,8]

console.log(myArr.includes(4)) //true
console.log(myArr.includes(9)) //false
console.log(myArr.indexOf(4)) //3
console.log(myArr.indexOf(9)) //-1(as 9 does not exist in the array)

const newArr = myArr.join()
console.log(myArr)
console.log(typeof myArr) //object
console.log(typeof newArr) //string


//slice and splice

console.log("A ", myArr) //original array 
//A [1, 2, 3, 4, 5, 6, 7, 8]

const myn1 = myArr.slice(1,3) 
console.log(myn1) //[ 2, 3 ]

console.log("B ", myArr) //use of slice 
//B  [1, 2, 3, 4, 5, 6, 7, 8]

const myn2 = myArr.splice(1,3)
console.log("C ", myArr) //use of splice 
//C  [ 1, 5, 6, 7, 8 ]
console.log(myn2) //[ 2, 3, 4 ]

// #####-------IMPORTANT----------######
//slice: gives the defined range as output 
//slice: removes the defined range from the array and gives the rest of the array as the output

