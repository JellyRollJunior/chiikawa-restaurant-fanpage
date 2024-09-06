import ramenTrio from "./images/chiikawa-ramen-trio.jpg";
import usagi from "./images/usagi.png";
import hachiware from "./images/hachiware.png";
import chiikawa from "./images/chiikawa.png";
import taipei from "./images/taipei-map.jpg";

import { Helper } from "./helper.js";

export { ContactPage };

const ContactPage = (function () {
    const createHoursAndLocationSection = () => {
        const hoursAndLocationRoot = document.createElement("div");
        hoursAndLocationRoot.classList.add("hours-and-location");
        const hoursInfoSection = createHoursInfoSection();
        const map = document.createElement("img");
        map.src = taipei;
        hoursAndLocationRoot.append(hoursInfoSection, map);
        return hoursAndLocationRoot;
    };

    const createHoursInfoSection = () => {
        const infoSection = document.createElement("div");
        const visitUsTitle = document.createElement("h3");
        visitUsTitle.textContent = "Please visit us at";
        const locationTitle = document.createElement("h2");
        locationTitle.textContent = "古亭";
        const hours = document.createElement("div");
        hours.classList.add("hours");
        hours.textContent = `Mon: 11am - 9pm\nTue: closed\nWed: closed\nThu: 11am - 9pm\nFri: 11am - 2am\nSat: 11am - 2am\nSun: 11am - 9pm`;
        infoSection.append(visitUsTitle, locationTitle, hours);
        return infoSection;   
    }

    const createChefsBio = () => {
        return Helper.createGrid(
            Helper.createCard(usagi, "537", "haaaa↗↗↗↗ iiiiiyyaaaaaaaa"),
            Helper.createCard(hachiware, "小八", "oiii naichyau"),
            Helper.createCard(chiikawa, "吉伊", "yan papa ruru ra ruru ra"),
        );
    }

    const renderContactPage = () => {
        const hoursAndLocationSeparator =
            Helper.createSeparator("Hours & Location");
        const hoursAndLocation = createHoursAndLocationSection();
        const chefSeparator = Helper.createSeparator("Meet the Chefs");
        const chefsImage = document.createElement("img");
        chefsImage.classList.add("hero-image");
        chefsImage.src = ramenTrio;
        const chefsBio = createChefsBio();
        Helper.appendToRoot(
            hoursAndLocationSeparator,
            hoursAndLocation,
            chefSeparator,
            chefsImage,
            chefsBio,
        );
    };

    return { renderContactPage };
})();
