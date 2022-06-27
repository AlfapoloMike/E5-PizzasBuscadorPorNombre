// import { cleanHTML } from "./cleaner.js"

export const showPizzas = (foto, nombre, ingredientes, precio) => {
    
    // cleanHTML()
    const body = document.querySelector('#main > div.cardContainer')
    const card = document.createElement('div')
    card.classList = 'card'
    card.innerHTML = `
           <img class="picture" src="${foto}" alt="">
           <h2 class="name">${nombre}</h2>
           <p class="ingredients">${ingredientes}</p>
           <p class="price">$${precio}</p>
           `
    body.appendChild(card)
}