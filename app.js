
import { saveDb } from "./js/localStorage.js";
import { addBtnListener, showAllPizzas } from "./js/listener.js";
import { showPizzaList } from "./js/showPizzasList.js";

document.addEventListener('DOMContentLoaded', () => {
    saveDb()
    addBtnListener()
    showPizzaList()
    showAllPizzas()
    }
)
