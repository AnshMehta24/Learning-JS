const boxes = document.querySelectorAll('.box');
const body = document.querySelector('body');

boxes.forEach((box)=>{
    console.log(box);
    box.addEventListener('click', (event)=>{
        console.log(event);
        console.log(event.target);
        if(event.target.id === 'grey'){
            body.style.backgroundColor = event.target.id;
        } else if(event.target.id === 'white'){
            body.style.backgroundColor = event.target.id;
        }
         else if(event.target.id === 'blue'){
            body.style.backgroundColor = event.target.id;
        }
         else{
            body.style.backgroundColor = event.target.id;
        }
    })
})