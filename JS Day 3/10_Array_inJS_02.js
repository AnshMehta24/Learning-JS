const Marvel_heros = ["Ironman", "Thor", "Spiderman"]
const DC_heros = ["Batman", "Superman", "Flash"]

// Marvel_heros.push(DC_heros)
// console.log(Marvel_heros);

// concate returns a new array
// const newHeros = Marvel_heros.concat(DC_heros)
// console.log(newHeros);

// spread Out Method 
const spArr = [...Marvel_heros, ...DC_heros]
// console.log(spArr);


const AnARR = [1, 2, 3, 5, [3, 4, 5], 3, 7, [5, 8, [1, 0, 8]], 3]
const realArr =  AnARR.flat(Infinity)
// console.log(realArr);


//
console.log(Array.isArray("Ansh"))
console.log(Array.from("Ansh"));

//
const score = 100
const score2 = 200
const score3 = 300

console.log(Array.of(score, score2, score3));