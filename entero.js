let num = parseInt(prompt('Introduce un número'))
let result=1

for(let i = num; i>1; i--){
    result *= i
}

console.log(`El factorial de ${num} es ${result}`)