const MY_MENU = document.getElementById('menu-content');
const MY_BASKET = document.getElementById('basket-content');
const MY_NAV_BASKET = document.getElementById('nav-basket-content');
const BASKET_BREAKPOINT = window.matchMedia('(min-width: 1461px)');
let BASKET_DOM = "";


function init() {
    renderMenu();
    renderBasket();
    moveBasket();
    MY_NAV_BASKET.addEventListener('click', function (i) {
        if (i.target === MY_NAV_BASKET) {
            MY_NAV_BASKET.close();
            document.getElementById('nav-basket-footer').style.display = "flex";
        }
    });
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

function renderBasket() {
    const BASKET_WRAPPER = document.createElement('div');
    BASKET_WRAPPER.innerHTML = templateBasket();
    BASKET_DOM = BASKET_WRAPPER.firstElementChild;
    placeBasket(BASKET_BREAKPOINT);
}

function placeBasket(i) {
    if (i.matches) {
        document.getElementById('basket-content').appendChild(BASKET_DOM);
    } else {
        document.getElementById('nav-basket-content').appendChild(BASKET_DOM);
    }
}

function addOrder(i) {
    const MY_ORDER = document.getElementById('basket-orders');
    const EXISTING_ORDER = document.getElementById("basket-order" + i.name);
    i.order++;
    const SUBTOTAL_PRICE = calculateSubtotal();
    let TOTAL_PRICE = "";
    if (EXISTING_ORDER) {
        document.getElementById("basket-order" + i.name).innerHTML = i.order;
    } else {
        document.getElementById('empty-basket')?.remove();
        MY_ORDER.innerHTML += templateBasketOrder(i);
        document.getElementById('price-wrapper').style.display = "flex";
    };
    if (SUBTOTAL_PRICE === 0) {
        TOTAL_PRICE = 0;
    } else {
        TOTAL_PRICE = SUBTOTAL_PRICE + 4.99;
    }
    document.getElementById('subtotal-price').innerHTML = SUBTOTAL_PRICE.toFixed(2).replace(".", ",") + "€";
    document.getElementById('total-price').innerHTML = TOTAL_PRICE.toFixed(2).replace(".", ",") + "€";
    document.getElementById('buy-now-price').innerHTML = "Buy now (" + TOTAL_PRICE.toFixed(2).replace(".", ",") + "€)";
}

function calculateSubtotal() {
    const ALL_ORDERS = [products.burger, products.pizza, products.salad].flat();
    return ALL_ORDERS.reduce((sum, i) => sum + i.price * i.order, 0);
}

function deleteOrder(i) {
    const ALL_ORDERS = [products.burger, products.pizza, products.salad].flat().find(p => p.name === i);
    document.getElementById("basket-order" + ALL_ORDERS.name).closest(".basket-part").remove();
    ALL_ORDERS.order = 0;
    updatePrices();
}

function plusOrder(i) {
    const ALL_ORDERS = [products.burger, products.pizza, products.salad].flat().find(p => p.name === i);
    ALL_ORDERS.order++;
    document.getElementById("basket-order" + ALL_ORDERS.name).innerHTML = ALL_ORDERS.order;
    updatePrices();
}

function minusOrder(i) {
    const ALL_ORDERS = [products.burger, products.pizza, products.salad].flat().find(p => p.name === i);
    ALL_ORDERS.order--;
    if (ALL_ORDERS.order === 0) {
        document.getElementById("basket-order" + ALL_ORDERS.name).closest(".basket-part").remove();
    } else {
        document.getElementById("basket-order" + ALL_ORDERS.name).innerHTML = ALL_ORDERS.order;
    }
    updatePrices();
}

function updatePrices() {
    const SUBTOTAL_PRICE = calculateSubtotal();
    let TOTAL_PRICE = "";
    if (SUBTOTAL_PRICE === 0) {
        TOTAL_PRICE = 0;
        document.getElementById('basket-orders').innerHTML = '<p id="empty-basket">Order now &#128522;</p>';
        document.getElementById('price-wrapper').style.display = "none";
    } else {
        TOTAL_PRICE = SUBTOTAL_PRICE + 4.99;
    }
    document.getElementById('subtotal-price').textContent = SUBTOTAL_PRICE.toFixed(2).replace(".", ",") + "€";
    document.getElementById('total-price').textContent = TOTAL_PRICE.toFixed(2).replace(".", ",") + "€";
    document.getElementById('buy-now-price').textContent = "Buy now (" + TOTAL_PRICE.toFixed(2).replace(".", ",") + "€)";
}

function openNavBasket() {
    MY_NAV_BASKET.showModal();
    document.getElementById('nav-basket-footer').style.display = "none";
}

function closeNavBasket() {
    MY_NAV_BASKET.close();
    document.getElementById('nav-basket-footer').style.display = "flex";
}

function moveBasket() {
    BASKET_BREAKPOINT.addEventListener('change', placeBasket);
}