let score =0;
let hitrn;
function createBubble(){
    let clutter = "";

for(let i=1;i<=152;i++){
    let rn = Math.floor(Math.random()*10)
    clutter += ` <div class="bubble">${rn}</div>`
}

document.querySelector('#pbottom').innerHTML = clutter;
}

function getNewHint(){
    hitrn = Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent = hitrn;
}


let timer =60;
function runTimer(){
    var interval = setInterval(()=>{
        if(timer >0){
            timer--;
            document.querySelector("#timerval").textContent = timer;
        }
        else{
            clearInterval(interval);
            document.querySelector('#pbottom').innerHTML = `<h1 id="final"> Your Final Score is ${score}</h1>`
        }
    },1000)
}


function increaseScore(){
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}

document.querySelector("#pbottom").addEventListener("click", (details)=>{
    let checkedNum = Number(details.target.textContent);
    if(checkedNum === hitrn){
        increaseScore();
        createBubble();
        getNewHint();
    }
})


getNewHint();   
runTimer();
createBubble();