function SetUserName(username){
    // complex DB call 
    this.username = username
    console.log('called');
}

function createUser(username, email, password){
    SetUserName.call(this, username)

    this.email = email
    this.password = password
}


const code = new createUser("Code", "code@gmail.com", "111")

console.log(code);