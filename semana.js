const days = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo']

const title = document.getElementById('title')
const daysList = document.getElementById('daysList')
const selectDays = document.getElementById('daysSelect')
title.innerHTML = 'DOM - <span>Crear e insertar elementos I<span>'

const fragment = document.createDocumentFragment()
for (const day of days) {
    const selectItem = document.createElement('OPTION')
    selectItem.setAttribute('value', day.toLowerCase())
    selectItem.textContent = day
    fragment.appendChild(selectItem)
}

selectDays.appendChild(fragment)