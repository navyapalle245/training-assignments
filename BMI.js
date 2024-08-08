
let weight = 110
let height = 1.9

let BMI = (weight/(height)**2).toFixed(1)
let classification;
let healthrisk;
console.log(`BMI: ${BMI} kg/sq.m`)

if (BMI < 18.5){
    classification='Underweight'
    healthrisk='Minimal'
}else if(BMI>=18.5 && BMI<=24.9){
    classification='Normal'
    healthrisk='Minimal'   
}else if(BMI>=25 && BMI<=29.9){
    classification='Overweight'
    healthrisk='Increased'
}else if(BMI>=30 && BMI<=34.9){
    classification='Obese'
    healthrisk='High'
}else if(BMI>=35 && BMI<=39.9){
    classification='Severely Obese'
    healthrisk='Very High'
}else{
    classification='Morbidly Obese'
    healthrisk='Extremely High'
}



console.log(`Classified as ${classification}`)
console.log(`Helth Risk is ${healthrisk}`)
