// Singleton Object 
// const WeChatUser = new Object()

// Non Singleton Oject 
// const WeChatUser = {}

const WeChatUser = {}

WeChatUser.id = "123ABC"
WeChatUser.name = "Max"
WeChatUser.isLoggedIn = false

// console.log(WeChatUser);

// Object Nesting
const regularUser = {
    email : "some@gmail.com",
    fullname:{
        userfullname :{
            firstName : "Ansh",
            lastName : "Mehta"
        }
    } 
}

// console.log(regularUser.fullname.userfullname.firstName);

// concate (combine) object 
const obj1 = {1: "a", 2:"b"}
const obj2 = {3: "A", 4 : "B"}

// const obj3 = Object.assign({},obj1, obj2)
const obj3 = {...obj1, ...obj2}
// console.log(obj3);


// If Multiple Data comes from DataBase
const users =[
{
    id:1,
    email:"WWW@gmail.com"
},
{
    id:2,
    email:"EEE@gmail.com"
}
]


const op = users[1].email
// console.log(op);

console.log(WeChatUser);
console.log(Object.keys(WeChatUser));
console.log(Object.values(WeChatUser));
console.log(Object.entries(WeChatUser));

console.log(WeChatUser.hasOwnProperty("IsLogged"));



const course ={
    coursename : "js in hindi",
    price: "999",
    coourseInstructor : "Ansh"
}

// course.coourseInstructor
// Object destructuring
const {coourseInstructor: instructor} = course

// console.log(coourseInstructor);
console.log(instructor);

//Basic of JSON API
// {
//     "name":"Ansh",
//     "coursename":"JS",
//     "price" : "free"
// }

// [
//     {},
//     {},
//     {}
// ]