const strName = 'Ansh_Mehta'
// 1) charAt() => Find character at given Index 
console.log(strName.charAt(3));

//2) Find Index of a given character 
console.log(strName.indexOf('A'));

// 3) Find Length of a String 
console.log(strName.length);

// 4) .at() => This Method  takes an integer value and returns a new String consisting of the single UTF-16 code unit located at the specified offset.
// ** It Takes Both Positive and Negative Values
let index = 4
console.log(`An index of ${index} returns the character ${strName.at(index)}`);
let negativeIndex = -3
console.log(`An index of ${negativeIndex} returns the character ${strName.at(negativeIndex)}`);

// 5) charCodeAt() => This method of String values returns an integer between 0 and 65535 representing the UTF-16 code unit at the given index.
console.log(`Character code ${strName.charCodeAt(index)} is equal to ${strName.charAt(index)}`);

// 6) concat() =>
const str1 = "Ansh"
const str2 = "Mehta"

console.log(str1 + str2);

console.log(str1.concat(' ',str2));

// 7) endsWith() => This Method of String values determines whether a string ends with the characters of this string, returning true or false as appropriate.
console.log(strName.endsWith('Mehta'));

// 8) lastIndexOf() => This Method of String values searches this string and returns the index of the last occurrence of the specified substring.  
const paragraph = "I think Ruth's dog is cuter than your dog!";

const searchTerm = 'dog';

console.log(
  `Index of the last ${searchTerm} is ${paragraph.lastIndexOf(searchTerm)}`,
);

// 9) repeat() => This method of String values constructs and returns a new string which contains the specified number of copies of this string, concatenated together.
const mood = 'Happy! ';

console.log(`I feel ${mood.repeat(3)}`);

// 10) replace() =>
const paragraph1 = "I think Ruth's dog is cuter than your dog!";

console.log(paragraph1.replace("Ruth's", 'my'));

// 11) replaceAll() =>
const paragraph2 = "I think Ruth's dog is cuter than your dog!";

console.log(paragraph2.replaceAll('dog', 'monkey'));


// 12) slice() =>
const sTr = 'The quick brown fox jumps over the lazy dog.';

console.log(sTr.slice(31));

// 13) startsWith() =>
const sTr1 = 'Saturday night plans';

console.log(sTr1.startsWith('Sat'));

// 14) substring() =>
const str = 'Mozilla';

console.log(str.substring(1, 3));
console.log(str.substring(2));

// There Many other Methods like trim, trimstart, trimend, uppercase, lowercase, etc.

// MDN DOC Link => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String