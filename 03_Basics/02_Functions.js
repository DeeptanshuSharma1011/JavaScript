function calculateCartPrice(val1, val2, ...num1){
    return num1
}

console.log(calculateCartPrice(200, 400, 500, 2000))
// 200 -> val1, 400 -> val2, rest goes in num1

const user = {
    username: "deepu",
    price: 999
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and the price is ${anyobject.price}`)
}

// handleObject(user)
handleObject({
    username: "Sam",
    price: 567
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray))
// console.log(returnSecondValue([200, 400, 100, 600]))

