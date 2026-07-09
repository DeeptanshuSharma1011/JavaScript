const marvel_heros = ["thor", "ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)
// //push dc_heros as a whole 3rd element in the marvel_heros array.

// console.log(marvel_heros)
// // [ 'thor', 'ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]

// console.log(marvel_heros[3]) // [ 'superman', 'flash', 'batman' ]
// console.log(marvel_heros[3][1]) // flash

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros) // [ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]

//push method pushes into the existing array
//whereas the concat returns a new array

const all_new_Heros = [...marvel_heros, ...dc_heros]
console.log(all_new_Heros)
// [ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]

//SPREAD METHOD: works same as concat just the difference is that you can add multiple arrays.
//it separates the elements of arrays and make a new array with all the array elements mentioned

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array)
// [1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5]

// flat method is used to separate all the elements in different depth and put them into a single array
// Infinity is the depth defined you what to run the method.

//CONVERTING ANY DATATYPE INTO ARRAY
console.log(Array.isArray("Deeptanshu")) //false
console.log(Array.from("Deeptanshu")) // ['D', 'e', 'e', 'p','t', 'a', 'n', 's','h', 'u']

console.log(Array.from({name: "Deeptanshu"})) // [] 
//gives an empty array because it can not convert it. 
//we have to specify if you want to make an array of the keys or of the values

let score1 = 100
let score2 = 200
let score3 = 300

// puts the values of multiple variables in single array
console.log(Array.of(score1, score2, score3))
// [ 100, 200, 300 ]