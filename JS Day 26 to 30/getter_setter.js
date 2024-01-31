class  User {
    constructor(email, pass){
        this.email = email;
        this.pass = pass;

    }
    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }

    get pass(){
        return `${this._pass}ansh`
    }
    set pass(value){
        this._pass = value;
    }

}

const Ansh = new User("Ansh@ai", "a1a")
console.log(Ansh.pass);
console.log(Ansh.email);


