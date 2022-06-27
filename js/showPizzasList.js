const pizzasList = document.querySelector('#main > div.pizzasList')

export const showPizzaList = () =>{
    const pizzasLocal = localStorage.getItem('Pizzas')
    const strLocalPizzas = JSON.parse(pizzasLocal)
    
    strLocalPizzas.map(pizza =>{
        const pizzaName = document.createElement('p')
        pizzaName.innerHTML = `
        <p>N°${pizza.id}:<span class="span"> ${pizza.nombre} </span></p>
        `
        pizzasList.appendChild(pizzaName)
    })
}