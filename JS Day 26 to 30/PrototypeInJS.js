let myName = "Ansh    "

// console.log(myName.truelength);



let myHeros = ["Thor", "Spiderman"]


let HeroPower ={
    Thor : "hammer",
    Spiderman : "sling",

    getSpiderPower : function(){
        console.log(`Spidy power is ${this.Spiderman}`);
    }
}

Object.prototype.ansh = function(){
    console.log(`Ansh is present in all Objects`);
}
Array.prototype.Heyansh = function(){
    console.log(`Ansh is present in all Array`);
}

// HeroPower.ansh()

// myHeros.ansh()

// myHeros.Heyansh()


// HeroPower.Heyansh()


// Inheritance
const User = {
    name : "Ansh",
    email : "hey@gmail.com"
}

const Teacher = {
    makeVideo : true
}

const TeachingSupport = {
    isAvailable : false
}

const TASupport =  {
    makeAssignments: 'JS Assignments',
    fullTime : true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern Syntax 
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername  = "AnshMehta"

String.prototype.truelength = function(){
    console.log(`${this}`);
    console.log(`True Length is : ${this.trim().length}`);
}

anotherUsername.truelength()
myName.truelength()