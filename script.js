const MY_MENU = document.getElementById('menu-content');

function init() {
    renderBurger();
}

function renderBurger() {
    let myBurgerList = "";
    for (let i = 0; i < products.burger.length; i++) {
        myBurgerList += templateBurgerMenu(i);
    }
    return myBurgerList;
}

function renderPizza() {
    let myPizzaList = "";
    for (let i = 0; i < products.pizza.length; i++) {
        myPizzaList += templatePizzaMenu(i);
    }
    return myPizzaList;
}

function renderBurger() {
    let myBurgerList = "";
    for (let i = 0; i < products.burger.length; i++) {
        myBurgerList += templateBurgerMenu(i);
    }
    return myBurgerList;
}
