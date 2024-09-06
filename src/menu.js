import kurimanju from "./images/kurimanju.png";
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
            createCard(),
        );
    }

    const contentRoot = document.querySelector("div#content");
    const appendToRoot = (...elements) => {
        for (const element of elements) {
            contentRoot.appendChild(element);
        }
    };

    const renderMenuPage = () => {
        const ramenSeparator = createSeparator("Ramen");
        const ramenMenu = createRamenMenu();

        appendToRoot(ramenSeparator, ramenMenu);
    };

    return { renderMenuPage };
})();
