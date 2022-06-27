
import { cleanHTML } from "./cleaner.js"
import { showError } from "./error.js"
import { showPizzas } from "./showPizzas.js"

let btnStatus = false

export const addBtnListener = () => {
    const pizzasLocal = localStorage.getItem('Pizzas')
    const strLocalPizzas = JSON.parse(pizzasLocal)
    const input = document.querySelector('#main > form > input[type=text]')
    const form = document.querySelector('#main > form')
    form.addEventListener('submit', (e) => {
        e.preventDefault()
        let pizzaCargada = false
        strLocalPizzas.map(localPizza => {
            if ( localPizza.nombre.toLowerCase() === input.value.toLowerCase()) {
                cleanHTML()
                showPizzas(localPizza.foto, localPizza.nombre, localPizza.ingredientes, localPizza.precio)
                pizzaCargada = true
                btnStatus = false
            }
        })
        if(pizzaCargada === false ){
            showError()
            pizzaCargada = false
         }
    })

}

export const showAllPizzas = () =>{
    const pizzasLocal = localStorage.getItem('Pizzas')
    const strLocalPizzas = JSON.parse(pizzasLocal)
    const btnShowAll = document.querySelector('#btnShowAll')
    btnShowAll.addEventListener('click', (e) =>{
        e.preventDefault()
        if(btnStatus === false){
            cleanHTML()
            strLocalPizzas.map(localPizza =>{
                showPizzas(localPizza.foto, localPizza.nombre, localPizza.ingredientes, localPizza.precio)
                console.log('pizza de ', localPizza.nombre )
            })
        }
        btnStatus = true
    })
}