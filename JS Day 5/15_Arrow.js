const user={
    username:"Ansh",
    price : 999,

    welcomeMessage:function (){
        console.log(`${this.username}, welcome to website`);
        // console.log(this);
    }

}
// this => reffers current context 

// user.welcomeMessage()
// user.username = "Max"
// user.welcomeMessage()

// function one (){
//     let username = "Ansh"
//     console.log(this.username);
// }
// one()

const One = () => {
    let username = "Ansh"
    console.log(this);
}

// One()

// () => {}

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }


// Implicit Return 
// const addTwo = (num1, num2) => num1 + num2


// const addTwo = (num1, num2) => (num1 + num2)

const addTwo = (num1, num2) => ({username:"Ansh"})


// console.log(addTwo(3,4))

 
