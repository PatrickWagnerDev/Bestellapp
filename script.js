const MY_MENU = document.getElementById('menu-content');
const MY_BASKET = document.getElementById('basket-contet')

function init() {
    renderMenu();
}

function renderMenu() {
    MY_MENU.innerHTML = templateMenu();
    renderBurger(products.burger);
    renderPizza(products.pizza);
    renderSalad(products.salad);
}

function renderBurger(array) {
    const MY_BURGER = document.getElementById('burger-menu');
    for (let i = 0; i < array.length; i++) {
        MY_BURGER.innerHTML += templateBurgerMenu(i);
    }
}

function renderPizza(array) {
    const MY_PIZZA = document.getElementById('pizza-menu');
    for (let i = 0; i < array.length; i++) {
        MY_PIZZA.innerHTML += templatePizzaMenu(i);
    }
}

function renderSalad(array) {
    const MY_SALAD = document.getElementById('salad-menu');
    for (let i = 0; i < array.length; i++) {
        MY_SALAD.innerHTML += templateSaladMenu(i);
    }
}