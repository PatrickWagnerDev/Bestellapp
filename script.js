const MY_MENU = document.getElementById('menu-content');
const MY_BASKET = document.getElementById('basket-content');
const MY_NAV_BASKET = document.getElementById('nav-basket-content');
const CONFIRMED_DIALOG = document.getElementById('order-confirmed');
const BASKET_BREAKPOINT = window.matchMedia('(min-width: 1461px)');
let BASKET_DOM = "";


function init() {
    renderMenu();
    renderBasket();
    moveBasket();
    closeNavBasketOuterDialog();
    closeConfirmedDialog();
}

function renderMenu() {
    MY_MENU.innerHTML = templateMenu();
    renderMenuParts('burger-menu', products.burger, templateBurgerMenu);
    renderMenuParts('pizza-menu', products.pizza, templatePizzaMenu);
    renderMenuParts('salad-menu', products.salad, templateSaladMenu);
}

function renderMenuParts(containerID, array, template) {
    const MENU_PART = document.getElementById(containerID);
    for (let i = 0; i < array.length; i++) {
        MENU_PART.innerHTML += template(i);
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
    i.order++;
    updateAddButton(i);
    viewIfEmptyBasket(i);
    const SUBTOTAL_PRICE = calculateSubtotal();
    let TOTAL_PRICE = SUBTOTAL_PRICE + 4.99;
    document.getElementById('subtotal-price').innerHTML = SUBTOTAL_PRICE.toFixed(2).replace(".", ",") + "€";
    document.getElementById('total-price').innerHTML = TOTAL_PRICE.toFixed(2).replace(".", ",") + "€";
    document.getElementById('buy-now-price').innerHTML = "Buy now (" + TOTAL_PRICE.toFixed(2).replace(".", ",") + "€)";
}

function viewIfEmptyBasket(i) {
    const MY_ORDER = document.getElementById('basket-orders');
    const EXISTING_ORDER = document.getElementById("basket-order" + i.name);
    if (EXISTING_ORDER) {
        document.getElementById("basket-order" + i.name).innerHTML = i.order;
    } else {
        document.getElementById('empty-basket')?.remove();
        MY_ORDER.innerHTML += templateBasketOrder(i);
        document.getElementById('price-wrapper').style.display = "flex";
    };
}

function updateAddButton(i) {
    const ADD_BUTTON = document.getElementById("add-button" + i.name);
    if (i.order > 0) {
        ADD_BUTTON.textContent = "Added +" + i.order;
    } else {
        ADD_BUTTON.textContent = "Add to basket";
    }
}

function updateAllAddButtons() {
    [products.burger, products.pizza, products.salad].flat().forEach(i => updateAddButton(i));
}

function calculateSubtotal() {
    const ALL_ORDERS = [products.burger, products.pizza, products.salad].flat();
    return ALL_ORDERS.reduce((sum, i) => sum + i.price * i.order, 0);
}

function deleteOrder(i) {
    const ALL_ORDERS = [products.burger, products.pizza, products.salad].flat().find(p => p.name === i);
    document.getElementById("basket-order" + ALL_ORDERS.name).closest(".basket-part").remove();
    ALL_ORDERS.order = 0;
    updateAddButton(ALL_ORDERS);
    updatePrices();
}

function plusOrder(i) {
    const ALL_ORDERS = [products.burger, products.pizza, products.salad].flat().find(p => p.name === i);
    ALL_ORDERS.order++;
    updateAddButton(ALL_ORDERS);
    document.getElementById("basket-order" + ALL_ORDERS.name).innerHTML = ALL_ORDERS.order;
    updatePrices();
}

function minusOrder(i) {
    const ALL_ORDERS = [products.burger, products.pizza, products.salad].flat().find(p => p.name === i);
    ALL_ORDERS.order--;
    updateAddButton(ALL_ORDERS);
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
    document.getElementById('nav-basket-footer').classList.add('slide-down')
    requestAnimationFrame(() => {
        MY_NAV_BASKET.classList.add('slide-up');
    });
}

function closeNavBasket() {
    MY_NAV_BASKET.close();
    MY_NAV_BASKET.classList.remove('slide-up');
    document.getElementById('nav-basket-footer').classList.remove('slide-down');
}

function moveBasket() {
    BASKET_BREAKPOINT.addEventListener('change', placeBasket);
}

function closeNavBasketOuterDialog() {
    MY_NAV_BASKET.addEventListener('click', function (i) {
        if (i.target === MY_NAV_BASKET) {
            MY_NAV_BASKET.close();
            MY_NAV_BASKET.classList.remove('slide-up');
            document.getElementById('nav-basket-footer').classList.remove('slide-down');
        }
    });
}

function openConfirmedDialog() {
    CONFIRMED_DIALOG.showModal();
    MY_NAV_BASKET.close();
    [products.burger, products.pizza, products.salad].flat().forEach(p => p.order = 0);
    updateAllAddButtons();
    updatePrices();
    setTimeout(() => {
        CONFIRMED_DIALOG.close();
        MY_NAV_BASKET.classList.remove('slide-up');
        document.getElementById('nav-basket-footer').classList.remove('slide-down');
    }, 3000);
}

function closeConfirmedDialog() {
    CONFIRMED_DIALOG.addEventListener('click', function (i) {
        if (i.target === CONFIRMED_DIALOG) {
            CONFIRMED_DIALOG.close();
            MY_NAV_BASKET.classList.remove('slide-up');
            document.getElementById('nav-basket-footer').classList.remove('slide-down');
        }
    });
}