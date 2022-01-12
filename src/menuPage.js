import { removeChildren } from "./index";
import MenuItem1 from "./img/american-burger.jpg";
import MenuItem2 from "./img/bacon-burger.jpeg";
import MenuItem3 from "./img/chicken-burger.jpeg";
import MenuItem4 from "./img/royal-burger.jpeg";
import MenuItem5 from "./img/slider.jpg";
import MenuItem6 from "./img/shrimp-burger.jpg";


export const displayMenuPage = function() {
    const contentDiv = document.querySelector('div#content');
    removeChildren(contentDiv);

    const menuH1 = document.createElement('h1');
    menuH1.textContent = 'Menu';

    const menuContainer = document.createElement('div');
    menuContainer.id = 'menuContainer';

    const menuItem1 = createMenuItem('All American Burger',
                    MenuItem1,
                    'image of an American burger',
                    'An All-American Burger with all the fixings served on a Sesame Bun');

    const menuItem2 = createMenuItem('Bacon Burger',
                    MenuItem2,
                    'image of a bacon burger',
                    'A mouthwatering Bacon Burger served on a Sesame Bun');
    const menuItem3 = createMenuItem('Chicken Burger',
                    MenuItem3,
                    'image of a chiken burger',
                    'There is no beef to be found in this delicious Chicken Burger!');
    const menuItem4 = createMenuItem('Royal Burger',
                    MenuItem4,
                    'image of a Royal burger',
                    'Our All-American Burger with a fried egg on top! Served on a Sesame Bun');
    const menuItem5 = createMenuItem('Sliders',
                    MenuItem5,
                    'image of a slider',
                    'Sliders that are great for sharing. Or maybe they are too good to share. Your choice!');
    const menuItem6 = createMenuItem('Shrimp Burger',
                    MenuItem6,
                    'image of a shrimp burger',
                    'Our mouth watering burger with a generous helping of shrimp on top!');

    menuContainer.appendChild(menuItem1);
    menuContainer.appendChild(menuItem2);
    menuContainer.appendChild(menuItem3);
    menuContainer.appendChild(menuItem4);
    menuContainer.appendChild(menuItem5);
    menuContainer.appendChild(menuItem6);
    contentDiv.appendChild(menuH1);
    contentDiv.appendChild(menuContainer);

};


const createMenuItem = function (title, src, alt, description) {
    const menuItem = document.createElement('div');
    menuItem.classList.add('menuItem');

    const burgerTitle = document.createElement('h2');
    burgerTitle.textContent = title;

    const burgerImg = new Image();
    burgerImg.classList.add('burgerImg');
    burgerImg.src = src;
    burgerImg.alt = alt;

    const burgerDescription = document.createElement('p');
    burgerDescription.textContent =  description;

    menuItem.appendChild(burgerTitle);
    menuItem.appendChild(burgerImg);
    menuItem.appendChild(burgerDescription);

    return menuItem;
}