const form = document.querySelector('form');
let genderDropdown = document.getElementById("gender"); 
let gender = genderDropdown.value;
genderDropdown.addEventListener("change",()=>{
    gender = genderDropdown.value;
    addImg(gender,0)

})


form.addEventListener('submit', (e)=>{
    e.preventDefault();

    const height = parseFloat(document.querySelector('#height').value);
    const weight = parseFloat(document.querySelector('#weight').value);
    const result= document.querySelector('#result');
    

    const bmi = (weight / ((height * height) / 10000)).toFixed(2);


    if(height === '' || height <0 || isNaN(height)){
        result.innerHTML = `<span style="font-size: 30px; color: red;">Please give a valid height ${height}</span>`;
    }else if (weight === '' || weight < 0 || isNaN(weight)) {
        result.innerHTML = `<span style="font-size: 30px; color: red;">Please give a valid weight ${weight}</span>`;


      } else {
        result.innerHTML = `<span>${bmi}</span>`;
         addImg(gender,bmi);
      }

})

function addImg(gender,bmi){
    let img = document.getElementById("img");
    if(gender === "Male"){
        if(bmi<18.5){
            img.src = "BMI_Underweight-removebg-preview.png";
        }else if(bmi>=18.5 && bmi<=25){
            img.src = "BMI_Vector_Average-removebg-preview.png";
        }else if(bmi>=25 && bmi<=30){
            img.src = "BMI_Vector_Average-removebg-preview.png";
        }else if(bmi>=30 && bmi<=40){
            img.src= "BMI_Vector_Overweight-removebg-preview.png";
        }else{
            img.src = "BMI_Vector_Extreme_Obesity-removebg-preview.png";
        }
    }else{
        if(bmi<18.5){
            img.src = "BMI_Vector_Female_Underweight-removebg-preview.png";
        }else if(bmi>=18.5 && bmi<=25){
            img.src = "BMI_Vector_Female_Average-removebg-preview.png";
        }else if(bmi>=25 && bmi<=30){
            img.src = "BMI_Vector_Female_Average-removebg-preview.png";
        }else if(bmi>=30 && bmi<=40){
            img.src= "BMI_Vector_Female_Overweight-removebg-preview.png";
        }else{
            img.src = "BMI_Vector_Female_Overweight-removebg-preview.png";
        }
    }
}
