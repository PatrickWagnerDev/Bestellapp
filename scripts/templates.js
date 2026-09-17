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
                    <button>
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
                    <button>
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
                    <button>
                        Add to basket
                    </button>
                </article>
            </section>
        </article>
    `;
}