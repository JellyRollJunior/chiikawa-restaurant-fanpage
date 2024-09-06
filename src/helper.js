export { Helper };

const Helper = (function () {
    const createSeparator = (text = "") => {
        const separator = document.createElement("div");
        separator.classList.add("separator");
        separator.textContent = text;
        return separator;
    };

    const contentRoot = document.querySelector("div#content");
    const appendToRoot = (...elements) => {
        for (const element of elements) {
            contentRoot.appendChild(element);
        }
    };

    const createGrid = (...cards) => {
        const menu = document.createElement("div");
        menu.classList.add("grid");
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

    return { createSeparator, createGrid, createCard, appendToRoot };
})();
