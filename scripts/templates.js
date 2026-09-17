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