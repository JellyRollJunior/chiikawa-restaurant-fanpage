import chiikawa from "./images/chiikawa.png";
import hachiware from "./images/hachiware.png";
import usagi from "./images/usagi.png";
import kurimanju from "./images/kurimanju.png";
import rakko from "./images/rakko.png";
import pajamaParties from "./images/pajama-parties.png";
import momonga from "./images/momonga.png";
import shisa from "./images/shisa.png";
import { Helper } from "./helper.js";
export { MenuPage };

const MenuPage = (function () {
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
            createCard(
                chiikawa,
                "Shio Ramen",
                "It's yummy. Please buy or he cry"
            ),
            createCard(hachiware, "Charumera", "His favorite charumera"),
            createCard(usagi, "urururuu", "Yaha yaha uuuuunma"),
            createCard(momonga, "Shoyu Ramen", "This guy is very annoying"),
            createCard(rakko, "Tsukemen", "Also yummy btw")
        );
    };

    const createDrinkMenu = () => {
        return createMenu(
            createCard(shisa, "Sanpincha", "Recommended by shisa"),
            createCard(kurimanju, "Beer", "AHHHHHHHHHH")
        );
    };

    const createDessertMenu = () => {
        return createMenu(
            createCard(shisa, "Satapanbin", "Ureshisa - nodo kawaichau kara"),
            createCard(pajamaParties, "Miso Ramen", "u u wa wa uwa"),
            createCard(kurimanju, "Parfait", "Kurimanju is my favorite")
        );
    };

    const renderMenuPage = () => {
        Helper.appendToRoot(
            Helper.createSeparator("Ramen"),
            createRamenMenu(),
            Helper.createSeparator("Drinks"),
            createDrinkMenu(),
            Helper.createSeparator("Desserts"),
            createDessertMenu()
        );
    };

    return { renderMenuPage };
})();
