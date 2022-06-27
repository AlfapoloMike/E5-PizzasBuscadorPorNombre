import { pizzas } from "./db.js"

export const saveDb =()=>{
    const pizzasArray = pizzas
    const strPizzas = JSON.stringify(pizzasArray)
    localStorage.setItem('Pizzas',strPizzas)
}