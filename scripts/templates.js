function templateMenu() {
    return /*html*/`
        <section class="menu-section">
            <header class="menu-header">
                <img src="./assets/icons/Burger_icon.png" alt="Burger Icon">
                <h2>
                    Burger & Sandwiches
                </h2>
            </header>
            <main id="burger-menu" class="menu-part-wrapper"></main>
        </section>
        <section class="menu-section">
            <header class="menu-header">
                <img src="./assets/icons/Pizza_icon.png" alt="Pizza Icon">
                <h2>
                    Pizza
                </h2>
            </header>
            <main id="pizza-menu" class="menu-part-wrapper"></main>
        </section>
        <section class="menu-section">
            <header class="menu-header">
                <img src="./assets/icons/Salad_icon.png" alt="Salad Icon">
                <h2>
                    Salad
                </h2>
            </header>
            <main id="salad-menu" class="menu-part-wrapper"></main>
        </section>
    `;
}

function templateBurgerMenu(i) {
    return /*html*/`
        <article class="menu-part">
            <img src="${products.burger[i].image}" alt="Veggie mushroom black burger">
            <section class="menu-description">
                <article>
                    <h3>
                        ${products.burger[i].name}
                    </h3>
                    <p>
                        ${products.burger[i].ingredients}
                    </p>
                </article>
                <article class="menu-price">
                    <p>
                        ${products.burger[i].price.toFixed(2).replace(".", ",")}€
                    </p>
                    <button onclick="addOrder(products.burger[${i}])">
                        Add to basket
                    </button>
                </article>
            </section>
        </article>
    `;
}

function templatePizzaMenu(i) {
    return /*html*/`
        <article class="menu-part">
            <img src="${products.pizza[i].image}" alt="Veggie mushroom black burger">
            <section class="menu-description">
                <article>
                    <h3>
                        ${products.pizza[i].name}
                    </h3>
                    <p>
                        ${products.pizza[i].ingredients}
                    </p>
                </article>
                <article class="menu-price">
                    <p>
                        ${products.pizza[i].price.toFixed(2).replace(".", ",")}€
                    </p>
                    <button onclick="addOrder(products.pizza[${i}])">
                        Add to basket
                    </button>
                </article>
            </section>
        </article>
    `;
}

function templateSaladMenu(i) {
    return /*html*/`
        <article class="menu-part">
            <img src="${products.salad[i].image}" alt="Veggie mushroom black burger">
            <section class="menu-description">
                <article>
                    <h3>
                        ${products.salad[i].name}
                    </h3>
                    <p>
                        ${products.salad[i].ingredients}
                    </p>
                </article>
                <article class="menu-price">
                    <p>
                        ${products.salad[i].price.toFixed(2).replace(".", ",")}€
                    </p>
                    <button onclick="addOrder(products.salad[${i}])">
                        Add to basket
                    </button>
                </article>
            </section>
        </article>
    `;
}

function templateBasket() {
    return /*html*/`
        <article class="basket">
            <div class="basket-infill">
                <header>
                    <h2>
                        Your Basket
                    </h2>
                </header>
                <section id="basket-orders" class="basket-order">
                    <p id="empty-basket">Order now &#128522;</p>
                </section>
                <section class="price-wrapper">
                    <article class="price-part">
                        <p>Subtotal</p>
                        <p>36,70€</p>
                    </article>
                    <article class="price-part">
                        <p>Delivery fee</p>
                        <p>4,99€</p>
                    </article>
                    <article class="price-part-total">
                        <p>Total</p>
                        <p>41,69€</p>
                    </article>
                    <button>
                        <p>Buy now (41,69€)</p>
                    </button>
                </section>
            </div>
        </article>
    `;
}

function templateBasketOrder(i) {
    return /*html*/`
        <article class="basket-part">
            <p>
                ${i.name}
            </p>
            <div class="basket-part-number">
                <div class="basket-number">
                    <button>
                        <img src="assets/icons/delete_icon.png" alt="Delete Button">
                    </button>
                    <p id="basket-order${i.name}">${i.order}</p>
                    <button>
                        +
                    </button>
                </div>
                <p>
                    ${i.price.toFixed(2).replace(".", ",")} €
                </p>
            </div>
        </article>
    `
}