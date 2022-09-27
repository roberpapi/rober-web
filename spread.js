const numbers = [-12, 2, 3, 23, 43, 2, 3]

console.log(Math.max(...numbers))
console.log(Math.min(...numbers))

//Eliminar elementos duplicados
console.log([...new Set(numbers)])