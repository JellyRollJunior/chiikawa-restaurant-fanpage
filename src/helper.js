export { Helper }

const Helper = (function() {
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

    return {createSeparator, appendToRoot}
})()