const list = document.getElementById('list')
const newElement = document.createElement('li')
newElement.textContent = "I'm a new element"

list.removeChild(list.children[1])