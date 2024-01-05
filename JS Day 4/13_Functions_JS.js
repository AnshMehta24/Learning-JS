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