// Immediately Invoked Function Expressions (IIFE)

(function One (){
    console.log(`DB Connected`);
})();

// One()

((name)=>{
    console.log(`DB Connected ${name}`);
})("Ansh");


// Global Scope ke pollution ko hatane ke liye IIFE use karte hai