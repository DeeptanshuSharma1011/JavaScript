//------------------DATES-----------------------

let myDate = new Date()
console.log(myDate)
//bad readibility of date and time

console.log(myDate.toString())
//better readibility of date and time

//different methods to display date and time in different formats
console.log(myDate.toDateString()) // Wed Jul 08 2026

console.log(myDate.toISOString()) // 2026-07-08T17:28:15.235Z

console.log(myDate.toJSON()) // 2026-07-08T17:28:15.235Z

console.log(myDate.toLocaleDateString()) // 8/7/2026

console.log(myDate.toLocaleString()) // 8/7/2026, 10:58:15 pm

console.log(myDate.toLocaleTimeString()) // 10:58:15 pm


console.log(typeof myDate) // object

let myCreatedDate = new Date(2023, 0, 24)
console.log(myCreatedDate.toDateString())
// months starts from 0. 0-jan, 1-feb, and so on

let myCreatedDate2 = new Date(2023, 0, 24, 5, 7)
// in this case, 5 is the hour and 7 is the minutes. So the time will be 5:07 am
console.log(myCreatedDate2.toLocaleString())

let myCreatedDate3 = new Date("01-24-2023") //mm-dd-yyyy format
console.log(myCreatedDate3.toDateString())

//----------------------TIME----------------------------

let myTimeStamp = Date.now()
console.log(myTimeStamp)
//gives the time in milliseconds since 1 jan 1970

console.log(myCreatedDate3.getTime())
//gives the time in milliseconds since 1 jan 1970 for the given date

console.log(Math.floor(Date.now() / 1000))
//gives the time in seconds since 1 jan 1970

//----------------------DATE METHODS----------------------------

let newDate = new Date()
console.log(newDate)
console.log(newDate.getMonth()) //starts form 0
console.log(newDate.getMonth() + 1) //to get the actual month number. fix of above problem

newDate.toLocaleString('default', { month: 'long' }) //gives the full name of the month
newDate.toLocaleString('default', { weekday: 'long' }) //gives the long name of the weekday