const myArr = [0,1,2,2,5]
const myHero = ["Batman", "IronMan", "Thor"]

const myArr2 = new Array(1, 2, 3, 4)
console.log(myArr2[2]);

// Array Methods / Operations
// 1)
myArr.push(3)
myArr.pop()
console.log(myArr);

// 2)
myArr.unshift(7)
myArr.shift()
console.log(myArr);

// 3)
console.log(myArr.includes(5));
console.log(myArr.indexOf(5));

// 4)
const newArr = myArr.join()
console.log(newArr);

// 5) slice, splice
// splice operation Manipulates Original Array where slice doesn't
console.log("A ", myArr);
const myn1 = myArr.slice(1,3)
console.log(myn1);
console.log("B ", myArr );

const myn2 = myArr.splice(1, 3)
console.log(myn2);
console.log("C ", myArr);