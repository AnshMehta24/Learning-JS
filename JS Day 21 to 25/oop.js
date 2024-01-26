const user = {
    username: "Ansh",
    loginCount : 10,
    signedIn : true,


    getUserDetails : function(){
        // console.log("Got Details from DB");
        // console.log(`username: ${this.username}`);
        // console.log(this);
    }
}

// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);


function User(username, loginCount, isLoggedIN){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIN = isLoggedIN;

    this.greetings = function(){
        console.log(`Welcome ${this.username}`);
    }

    return this;
}

const userOne = new User("Ansh,", 24, false)
const userTwo = new User("Chai", 11, true)
console.log(userOne.constructor);
// console.log(userTwo);

/*
Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.
*/
