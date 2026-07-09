//------------------NESTED SCOPES-------------------------

function one(){
    const username = "deepu"
     function two(){
        const website = "youtube"
        console.log(username)
     }
     console.log(website) //error: not defined (outside the scope)

     two() //deepu
}

one() //wont execute as out of the scope




if(true){
    const username = "deepu"
    if(username === "deepu"){
        const website = " youtube"
        console.log(username + youtube) //deepu youtube
    }
    console.log(website) //error: not defined (out of the scope)
}
console.log(username) //error: not defined (out of the scope)


//---------------------INTERESTING----------------------(2 function syntax)
//basic function
addone(5)
function addone(num){
    return num + 1
}

//wont give an error if the function is called before initialization


addtwo(5)
//also called EXPRESSION. Acts like a variable can hold anything like json, function, etc.
const addtwo = function(num){
    return num + 2
}

//will give an error as the function is stored in a variable and we are calling the variable. 
//and variables can not be called before initialization
