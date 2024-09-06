import "./styles.css";
import { Homepage } from "./homepage.js";

const TabController = (function() {
    
    // initial render
    // Homepage.renderHomepage();

    const navigationMenu = document.querySelector("nav");
    const ClickHandlerNavigationMenu = (event) => {
        // clear content
        const contentRoot = document.querySelector("div#content");
        contentRoot.textContent = "";
        const target = event.target;
        switch(target.id) {
            case "nav-home":
                Homepage.renderHomepage();
                break;
            case "nav-menu":
                break;
            case "nav-contact":
                break;
            default:
                Homepage.renderHomepage();
        }
    }
    navigationMenu.addEventListener("click", ClickHandlerNavigationMenu);
})();