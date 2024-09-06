import chiikawaRamen from "./images/chiikawa-ramen.jpg";
export { Homepage };

const Homepage = (function () {
    const contentRoot = document.querySelector("div#content");

    const createHeroImage = () => {
        const heroImage = document.createElement("img");
        heroImage.classList.add("hero-image")
        heroImage.src = chiikawaRamen;
        return heroImage;
    };

    const createSeparator = () => {
        const separator = document.createElement("div");
        separator.classList.add("separator");
        return separator;
    };

    const createDescription = () => {
        const description = document.createElement("div");
        description.classList.add("restaurant-description");
        description.textContent = `This is the best restaurant ever!\nI love Shisa and all the cute little animals there!`
        return description;
    };

    const appendToRoot = (...elements) => {
        for (const element of elements) {
            contentRoot.appendChild(element);
        }
    };

    const renderHomepage = () => {
        const heroImage = createHeroImage();
        const separator = createSeparator();
        const description = createDescription();
        appendToRoot(heroImage, separator, description);
    };

    return { renderHomepage };
})();
