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

    const appendToRoot = () => {
        for (const element of arguments) {
            contentRoot.appendChild(element);
        }
    };

    const renderHomepage = () => {
        const heroImage = createHeroImage();
        const separator = createSeparator();
        const description = createDescription();
        contentRoot.appendChild(heroImage);
        contentRoot.appendChild(separator);
        contentRoot.appendChild(description);
        appendToRoot(heroImage, separator, description);
    };

    return { renderHomepage };
})();
