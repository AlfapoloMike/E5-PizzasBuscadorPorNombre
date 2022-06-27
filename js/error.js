import { cleanHTML } from "./cleaner.js"

export const showError = () => {
    const body = document.querySelector('#main > div.cardContainer')
    cleanHTML()
    const imgError = document.createElement('div')
    imgError.setAttribute('id', 'error')
    imgError.innerHTML = `
    <img class="picture" src="/assets/error.jpg" alt="">
    <p>Nombre Invalido</p>
    <p>Elige uno de la lista</p>
    `
    body.appendChild(imgError)
}
