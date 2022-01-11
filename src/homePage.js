import {removeChildren} from './index';

export const displayHomePage = function() {
    const contentDiv = document.querySelector('div#content');
    removeChildren(contentDiv);

    const restaurantImg = document.createElement('img');
    restaurantImg.classList.add('main-img');
    restaurantImg.src = 'img/my-restaurant.jpeg';
    restaurantImg.alt = 'an image of the restaurant lounge';

    const homeH1 = document.createElement('h1');
    homeH1.textContent = 'Welcome to JwJack\'s Burger Shack!';

    const infoPara = document.createElement('p');
    infoPara.textContent = 'This is a fantastic place to eat. Come join us during our business hours...';

    contentDiv.appendChild(homeH1);
    contentDiv.appendChild(restaurantImg);
    contentDiv.appendChild(infoPara);

};