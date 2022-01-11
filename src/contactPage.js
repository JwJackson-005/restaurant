import { removeChildren } from "./index";

export const displayContactPage = function() {
    const contentDiv = document.querySelector('div#content');
    removeChildren(contentDiv);

    const contactH1 = document.createElement('h1');
    contactH1.textContent = 'Contact Us';

    const numberPara = document.createElement('p');
    numberPara.classList.add('contactInfo');
    numberPara.textContent = '📞 123 456 789';

    const locationPara = document.createElement('p');
    locationPara.classList.add('contactInfo');
    locationPara.textContent = '🏠 1234 W. Riverside Ave, Ourtown, WA 99999';

    const emailPara = document.createElement('p');
    emailPara.classList.add('contactInfo');
    emailPara.textContent = ' ✉ jwjackburgershack@realemail.com';

    contentDiv.appendChild(contactH1);
    contentDiv.appendChild(numberPara);
    contentDiv.appendChild(locationPara);
    contentDiv.appendChild(emailPara);

};