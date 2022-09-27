const numbers = [3,43,21,20,56]
let pares = []
let impares = []

for(const number of numbers){
    let random = Math.round(Math.random() * 10 + 1)
    const result = number * random

    console.log(`${number} x ${random} = ${result}`);
    if(result % 2 == 0){
        pares.push(result)
    }else{
        impares.push(result)
    }
}

console.log(pares);
console.log(impares);