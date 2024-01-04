// Date Object 
let myDate = new Date()

console.log(typeof myDate);

console.log(myDate.toString());
//Thu Jan 04 2024 10:55:27 GMT+0530 (India Standard Time)
console.log(myDate.toDateString());
// Thu Jan 04 2024
console.log(myDate.toTimeString());
// 10:55:27 GMT+0530 (India Standard Time)
console.log(myDate.toLocaleDateString());
// 4/1/2024
console.log(myDate.toLocaleTimeString());
// 10:55:27 am
console.log(myDate.toISOString());
// 2024-01-04T05:25:27.216Z
console.log(myDate.toUTCString());
// Thu, 04 Jan 2024 05:25:27 GMT
console.log(myDate.toLocaleString());
// 4/1/2024, 10:55:27 am


//diiferent Syntax of Date Object
// 1)
let dateSyntax = new Date(2023, 0, 30)
console.log(dateSyntax.toLocaleDateString());
// 2)
let dateIs = new Date(2023, 0, 3, 5, 40)
console.log(dateIs.toLocaleString());
// 3)
let date3 = new Date("2024-01-23")
console.log(date3.toLocaleString());
// 4)
let date4 = new Date("01-14-2024")
console.log(date4.toLocaleString());


let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(date4.getTime());
console.log(Math.floor(Date.now()/1000));

// Diff. get method in date 
let newDate = new Date()
// 1)
console.log(newDate.getTime());
// 2)
console.log(newDate.getFullYear());
// 3)
console.log(newDate.getMonth());
// 4)
console.log(newDate.getDate());
// 5)
console.log(newDate.getHours());
// And Manymore 

console.log(newDate.toLocaleString('defualt', {weekday:'long', day:'2-digit'}));
