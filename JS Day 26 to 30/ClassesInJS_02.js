class User{
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`Username is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email;
        this.password= password;
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}


const code = new Teacher("code", "code@123", "122")

code.addCourse()

const tea = new User("TEA");


tea.logMe()


console.log(code === tea);


console.log(code instanceof Teacher);
console.log(tea instanceof User);
console.log(code instanceof User);