// Singleon
// Object.create

// literals Approach => No Singleton
// Constructor Aproach => Singleton


// Object literals

const mySym =Symbol("mykey")

const JsUser = {
    [mySym] : "mykey1",
    name : "Ansh",
    age : 19,
    "location" : "India",
    email : "abc@gmail.com",
    isLoggedIN : false,
    lastLoginDays : ["Monday", "Wednesday"]
}

// Accessing Objects
// 1)
console.log(JsUser.age);
// 2)
console.log(JsUser["age"]);
console.log(JsUser["location"]);

// console.log(JsUser.mySym);
// console.log(typeof JsUser.mySym);//string

// if u have to use symbol as a key than the correct syntax is to write the key in []

console.log(JsUser[mySym]);

JsUser.email = "ndvjv@gmail.com"
// freeze method prevents the addition of new properties
// Object.freeze(JsUser)
// JsUser.email = "hello@gmail.com"
// console.log(JsUser);

JsUser.greeting = function (){
    console.log("Hello JS User!");
}

// console.log(JsUser.greeting); // function Doesn't execute just reference is return
console.log(JsUser.greeting());

// same object ko reference karna hai to use this 
JsUser.greetingTwo = function (){
    console.log(`Hello JS User, ${this.name}`);
}

console.log(JsUser.greetingTwo());