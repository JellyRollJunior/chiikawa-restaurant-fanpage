import kurimanju from "./images/kurimanju.png";
import shisa from "./images/shisa.png";
import ramenSan from "./images/ramen-san.png";
export { MenuPage };

const MenuPage = (function () {
    const createSeparator = (text = "") => {
        const separator = document.createElement("div");
        separator.classList.add("separator");
        separator.textContent = text;
        return separator;
    };

    const createMenu = (...cards) => {
        const menu = document.createElement("div");
        menu.classList.add("restaurant-menu");
        for (const card of cards) {
            menu.appendChild(card);
        }
        return menu;
    };

    const createCard = (imageSrc, title, description) => {
        const card = document.createElement("div");
        card.classList.add("card");
        const imageElement = document.createElement("img");
        imageElement.src = imageSrc;
        const menuTitleElement = document.createElement("div");
        menuTitleElement.classList.add("card-title");
        menuTitleElement.textContent = title;
        const descriptionElement = document.createElement("div");
        descriptionElement.textContent = description;
        card.appendChild(imageElement);
        card.appendChild(menuTitleElement);
        card.appendChild(descriptionElement);
        return card;
    };

    const createRamenMenu = () => {
        return createMenu(
            createCard(kurimanju, "Shio Ramen", "It's yummy. Please buy it"),
            createCard(),
            createCard(),
            createCard(),
            createCard()
        );
    };

    const createDrinkMenu = () => {
        return createMenu(
            createCard(
                ramenSan,
                "sanpincha",
                "nomimono no mono osusumeshimasu"
            ),
            createCard()
        );
    };

    const createDessertMenu = () => {
        return createMenu(
            createCard(shisa, "satapanbin", "ureshisa - nodo kawaichau kara"),
            createCard(),
            createCard()
        );
    };

    const contentRoot = document.querySelector("div#content");
    const appendToRoot = (...elements) => {
        for (const element of elements) {
            contentRoot.appendChild(element);
        }
    };

    const renderMenuPage = () => {
        appendToRoot(
            createSeparator("Ramen"),
            createRamenMenu(),
            createSeparator("Drinks"),
            createDrinkMenu(),
            createSeparator("Desserts"),
            createDessertMenu()
        );
    };

    return { renderMenuPage };
})();
