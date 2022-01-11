import { displayHomePage } from "./homePage";
import { displayMenuPage } from "./menuPage";
import { displayContactPage } from "./contactPage";


export const displayHeader = function() {
    const headerDiv = document.querySelector('div#header');
    headerDiv.classList

    const homeButton = document.createElement('button');
    homeButton.textContent = 'Home';
    homeButton.addEventListener('click', displayHomePage);

    const menuButton = document.createElement('button');
    menuButton.textContent = 'Menu';
    menuButton.addEventListener('click', displayMenuPage);

    const contactButton = document.createElement('button');
    contactButton.textContent = 'Contact';
    contactButton.addEventListener('click', displayContactPage);


    headerDiv.appendChild(homeButton);
    headerDiv.appendChild(menuButton);
    headerDiv.appendChild(contactButton);
};