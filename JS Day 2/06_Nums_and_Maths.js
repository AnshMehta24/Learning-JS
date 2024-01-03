const score = 500

// Ex plocitly Define the datatype
const balance =  new Number(3000)
console.log(balance);

// toString Method 
console.log(balance.toString().length);

// toFixed Method 
console.log(balance.toFixed(2));

const num = 26.66

console.log(num.toPrecision(3));


const hundreds = 100000
console.log(hundreds.toLocaleString('en-IN'));

// ++++++++++++++++++++++++++++++ Maths ++++++++++++++++++++++++++++++++++//

// Absolute Value 
console.log(Math.abs(-4));

console.log(Math.round(4.6));

console.log(Math.ceil(4.6));

console.log(Math.floor(4.6));

console.log(Math.min(2,6,1,9));

console.log(Math.max(2,1,4,9));


// Important

console.log(Math.random());
console.log(Math.random()*10);
console.log((Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min  ) 

// For more Num & Math properties and methods here's a link 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math

