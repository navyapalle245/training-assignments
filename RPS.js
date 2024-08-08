let Raju='Rock'
let Ravi='Paper'

let result;

if(Raju==='Rock' && Ravi==="Scissors"){
    result = 'Raju'
}else if (Raju==='Scissors' && Ravi==='Rock'){
    result = 'Ravi'
}else if(Raju==='Paper' && Ravi==="Rock"){
    result = 'Raju'
}else if(Raju==='Rock' && Ravi==="Paper"){
    result = 'Ravi'
}else if(Raju==='Scissors' && Ravi==="Paper"){
    result = 'Ravi'
}else if(Raju==='Paper' && Raju==="Scissors"){
    result = 'Raju'
}else{
    result = 'Nobody'
}

console.log(`${result} wins`)

