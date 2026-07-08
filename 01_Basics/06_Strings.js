const name = "deepu"
const repoCount = 50

// console.log(name + repoCount + " Value")
// outdated and not recommended to use

console.log(`Hello my name is ${name} and the repo count is ${repoCount}`)

//different way to declare a string
const gameName = new String("deepusharma")
//to get to know more about what this does check this in console log on google

console.log(gameName[0]); //d
console.log(gameName.__proto__) //{}

console.log(gameName.length) //11
console.log(gameName.toUpperCase(gameName)) //DEEPUSHARMA
//but this did not change the original value as string is a primitive value

console.log(gameName.charAt(2)) //e
console.log(gameName.indexOf('p')) //3
console.log(gameName.indexOf('t')) //-1 (as t is not present in the string)

const newString = gameName.substring(0, 4)
console.log(newString) //deep
//includes the first index but excludes the second index. 
//does not work on negative indexes for reverse.

const anotherString = gameName.slice(-5, -1)
console.log(anotherString) //harm

const newStringOne = "    deepu    "
console.log(newStringOne)
console.log(newStringOne.trim()) //deepu
//trims the extra space characters(white spaces and the line terminators)


const url = "https://deeptanshu.com/deeptanshu%20sharma"

console.log(url.replace('%20', '-')) //https://deeptanshu.com/deeptanshu-sharma
console.log(url.includes('deeptanshu')) //true
console.log(url.includes('deepu')) //false

//converting string to array
const testName = "deepu-sharma"
console.log(testName.split('-')) //[ 'deepu', 'sharma' ]







