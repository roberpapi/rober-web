/* const title = document.getElementById('title')
title.textContent = 'DOM - Accediendo a nodos' */

/* const paragraph = document.querySelector('.paragraph')
const span = document.getElementById('title').querySelector("span") */

const paragraphs = document.querySelectorAll('.paragraph')

//const paragraphsSpread = [...document.querySelectorAll('.paragraph')]

const paragraphsArray = Array.from(document.querySelectorAll('.paragraph'))

paragraphs[0].style.color = 'red'

//paragraphs.map(p => p.style.color = 'green')

//paragraphsSpread.map(p => p.style.color = 'green')

paragraphsArray.map(p=>p.style.color='blue')