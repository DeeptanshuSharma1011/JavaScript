const tinderUser = new Object() //singleton object (contructor method)

// console.log(tinderUser) // {}(empty object)

tinderUser.id = "123abc"
tinderUser.name = "Deepu"
tinderUser.isLoggedIn = false

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Deeptanshu",
            lastname: "Sharma"
        }
    }
}

console.log(regularUser.fullname.userfullname.lastname) // Sharma

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

const obj3 = {obj1, obj2}
console.log(obj3) // { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }

const obj4 = Object.assign({}, obj1, obj2)
console.log(obj4) // { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

//according to the documentation Object.assign(target, source)
//so {} acts as the target place for all the sources to get stored.
// so it works even when we have multiple sources. (Object.assign({}, obj1, obj2, obj3)). 
// In this {} acts as the target value and all other acts as sources

//SPREADING METHOD (same as array)
const obj5 = {...obj1, ...obj2}
console.log(obj5) // { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

const users = [
    {
        id: 1,
        email: "d@gmail"
    },
    {
        id: 1,
        email: "d@gmail"
    },
    {
        id: 1,
        email: "d@gmail"
    }
]

users[1].email

console.log(tinderUser)

console.log(Object.keys(tinderUser))
// [ 'id', 'name', 'isLoggedIn' ]
// NOTICE: the output is in arrays. 

console.log(Object.values(tinderUser))
// [ '123abc', 'Deepu', false ]

console.log(Object.entries(tinderUser))
// [ [ 'id', '123abc' ], [ 'name', 'Deepu' ], [ 'isLoggedIn', false ] ]

console.log(tinderUser.hasOwnProperty("isLoggedIn")) // true
console.log(tinderUser.hasOwnProperty("isLoggedOut")) // false



