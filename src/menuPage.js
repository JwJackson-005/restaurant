import { removeChildren } from "./index";


export const displayMenuPage = function() {
    const contentDiv = document.querySelector('div#content');
    removeChildren(contentDiv);

    const menuH1 = document.createElement('h1');
    menuH1.textContent = 'Menu';

    const menuContainer = document.createElement('div');
    menuContainer.id = 'menuContainer';

    const menuItem1 = createMenuItem('All American Burger',
                    '../dist/img/american-burger.jpg',
                    'image of an American burger',
                    'An All-American Burger with all the fixings served on a Sesame Bun');

    const menuItem2 = createMenuItem('Bacon Burger',
                    '../dist/img/bacon-burger.jpeg',
                    'image of a bacon burger',
                    'A mouthwatering Bacon Burger served on a Sesame Bun');
    const menuItem3 = createMenuItem('Chicken Burger',
                    '../dist/img/chicken-burger.jpeg',
                    'image of a chiken burger',
                    'There is no beef to be found in this delicious Chicken Burger!');
    const menuItem4 = createMenuItem('Royal Burger',
                    '../dist/img/royal-burger.jpeg',
                    'image of a Royal burger',
                    'Our All-American Burger with a fried egg on top! Served on a Sesame Bun');
    const menuItem5 = createMenuItem('Sliders',
                    '../dist/img/slider.jpg',
                    'image of a slider',
                    'Sliders that are great for sharing. Or maybe they are too good to share. Your choice!');
    const menuItem6 = createMenuItem('Shrimp Burger',
                    '../dist/img/shrimp-burger.jpg',
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

    const burgerImg = document.createElement('img');
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