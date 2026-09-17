const MY_MENU = document.getElementById('menu-content');

function init() {
    renderBurger();
}

function renderMenu() {
    MY_MENU.innerHTML = templateMenu();

}

function renderBurger() {
    const MY_BURGER = document.getElementById('burger-menu');
    for (let i = 0; i < products.burger.length; i++) {
        MY_BURGER.innerHTML += templateBurgerMenu(i);
    }

function renderPizza() {
    const MY_PIZZA = document.getElementById('pizza-menu');
    for (let i = 0; i < products.pizza.length; i++) {
        MY_PIZZA.innerHTML += templatePizzaMenu(i);
    }
}

function renderSalad() {
    const MY_SALAD = document.getElementById('salad-menu');
    for (let i = 0; i < products.salad.length; i++) {
        MY_SALAD.innerHTML += templateSaladMenu(i);
    }
