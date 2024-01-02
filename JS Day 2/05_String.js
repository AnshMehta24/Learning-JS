const name = "Ansh"
const repocount = 70

// Concatinate
// The Outdated Syntax
// console.log(name + repocount)

// New Syntax -- Use Backticks
console.log(`Hello My Name is ${name} and my repo Count is ${repocount}`);

//Another Way of String Declaration 
const gameName = new String('Ansh-AM')

console.log(gameName[0]);
console.log(gameName.__proto__);

// Length
console.log(gameName.length);

// Upper Lower Case 
console.log(gameName.toUpperCase());
console.log(gameName.toLowerCase());

//Find Character at a given Index
console.log(gameName.charAt(3));

// Find Index of a given character 
console.log(gameName.indexOf('A'));

//
const newString = gameName.substring(0,5)
console.log(newString);

//Slice Method
const anotherString = gameName.slice(-8,4)
console.log(anotherString);

// Trim Method 
const Str = "    Ansh     "
console.log(Str);
console.log(Str.trim());

// Replace Method
const url = "https://ansh.in/ansh.3@"

console.log(url.replace('@','-'));


console.log(url.includes('ansh'));

// Covert String to Array  [Split Based On Dash]

console.log(gameName.split('-'));
