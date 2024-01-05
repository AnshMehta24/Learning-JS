function sayMyName(){
    console.log("A");
    console.log("N");
    console.log("S");
    console.log("H");
}

// sayMyName()

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }

// const result = addTwoNumbers(3,6)


function addTwoNumbers(number1,number2){
    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3,9)
// console.log("Result :", result);

function loginUserMessage(username){
    if(!username){
        console.log("Please Enter username");
        return
    }
return `${username}, you are successfully Logged In`
}

const msg = loginUserMessage()
console.log(msg);

// Rest operator => ...   
// function calculateCartPrice(...num1){
function calculateCartPrice(val1, val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(200, 300, 400, 2000))

const user = {
    username : "Ansh",
    price : 2000
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "Sam",
    price: 999
})

const myNewArray = [200, 400, 500]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,400,500]));
