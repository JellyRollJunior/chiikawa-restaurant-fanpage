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
    const createRamenMenu = () => {
        return Helper.createGrid(
            Helper.createCard(
                chiikawa,
                "Shio Ramen",
                "It's yummy. Please buy or he cry"
            ),
            Helper.createCard(hachiware, "Charumera", "His favorite charumera"),
            Helper.createCard(usagi, "urururuu", "Yaha yaha uuuuunma"),
            Helper.createCard(momonga, "Shoyu Ramen", "This guy is very annoying"),
            Helper.createCard(rakko, "Tsukemen", "Also yummy btw")
        );
    };

    const createDrinkMenu = () => {
        return Helper.createGrid(
            Helper.createCard(shisa, "Sanpincha", "Recommended by shisa"),
            Helper.createCard(kurimanju, "Beer", "AHHHHHHHHHH")
        );
    };

    const createDessertMenu = () => {
        return Helper.createGrid(
            Helper.createCard(shisa, "Satapanbin", "Ureshisa - nodo kawaichau kara"),
            Helper.createCard(pajamaParties, "Miso Ramen", "u u wa wa uwa"),
            Helper.createCard(kurimanju, "Parfait", "Kurimanju is my favorite")
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
