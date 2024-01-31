let Descriptor =Object.getOwnPropertyDescriptor(Math, "PI")


console.log(Descriptor);

// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI);


const code = {
    name : "Js code",
    rank : 999,
    isAvailable : true,



    changerank : function(){
        console.log("No ");
    }
}

console.log(Object.getOwnPropertyDescriptor(code, "name"));

Object.defineProperty(code, "name", {
    writable : false,
    enumerable : false
})

// console.log(Object.getOwnPropertyDescriptor(code, "name"));


for(let [key, value] of Object.entries(code)){
    if(typeof value !== 'function'){
        console.log(`${key} : ${value}`);

    }

}