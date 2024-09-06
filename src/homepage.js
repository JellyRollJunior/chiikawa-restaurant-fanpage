import chiikawaRamen from "./images/chiikawa-ramen.jpg";
import { Helper } from "./helper.js";
export { Homepage };

const Homepage = (function () {
    const createHeroImage = () => {
        const heroImage = document.createElement("img");
        heroImage.classList.add("hero-image")
        heroImage.src = chiikawaRamen;
        return heroImage;
    };

    const createDescription = () => {
        const description = document.createElement("div");
        description.classList.add("restaurant-description");
        description.textContent = `This is the best restaurant ever!\nI love Shisa and all the cute little animals there!`
        return description;
    };

    const renderHomepage = () => {
        const heroImage = createHeroImage();
        const separator = Helper.createSeparator();
        const description = createDescription();
        Helper.appendToRoot(heroImage, separator, description);
    };

    return { renderHomepage };
})();
