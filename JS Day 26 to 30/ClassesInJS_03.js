class User{
    constructor(username){
        this.username =username;

    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    static createID(){
        return `123`
    }
}


const Ansh = new User("Ansh")

// console.log(Ansh.createID())


class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone", "i@phone.com")
console.log(iphone.createId());

