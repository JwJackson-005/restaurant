import "../src/style.css";

const removeChildren = function(node) {
    while (node.firstChild) {
        node.removeChild(node.firstChild);
    }
}

const displayHomePage = function() {
    const contentDiv = document.querySelector('div#content');
    removeChildren(contentDiv);
    
    const restaurantImg = document.createElement('img');
    restaurantImg.src = '../src/restaurant.jpg';
    restaurantImg.alt = 'an image of the restaurant lounge';
    
    const homeH1 = document.createElement('h1');
    homeH1.textContent = 'Welcome to the Restaurant!';
    
    const infoPara = document.createElement('p');
    infoPara.textContent = 'This is a fantastic place to eat. Come join us during our business hours...';

    contentDiv.appendChild(restaurantImg);
    contentDiv.appendChild(homeH1);
    contentDiv.appendChild(infoPara);

};

const displayMenuPage = function() {
    const contentDiv = document.querySelector('div#content');
    removeChildren(contentDiv);
        
    const menuH1 = document.createElement('h1');
    menuH1.textContent = 'This is the Menu Page!';
    
    const infoPara = document.createElement('p');
    infoPara.textContent = 'Here are our food options...';

    contentDiv.appendChild(menuH1);
    contentDiv.appendChild(infoPara);

};

const displayContactPage = function() {
    const contentDiv = document.querySelector('div#content');
    removeChildren(contentDiv);
        
    const contactH1 = document.createElement('h1');
    contactH1.textContent = 'This is the Contact Page!';
    
    const infoPara = document.createElement('p');
    infoPara.textContent = 'You may contact us here!';

    contentDiv.appendChild(contactH1);
    contentDiv.appendChild(infoPara);

};

const displayHeader = function() {
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

const render = function() {
    displayHeader();
    displayHomePage();
}();