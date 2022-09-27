const button = document.getElementById('button')

const person = {
    name: 'Derren',
    age: 32,
    email: 'derrensexy@gmail.com'
}



const saludar = () => {
    console.log('Hola')
}

let cont = 0


const interval = setInterval(() => {
    console.log(cont)
    cont++
}, 1000)

button.addEventListener('click', () => {
    clearInterval(interval)
})