import "../dist/css/style.css";
import { displayHomePage } from "./homePage";
import { displayHeader } from "./header";

export const removeChildren = function(node) {
    while (node.firstChild) {
        node.removeChild(node.firstChild);
    }
}

const render = function() {
    displayHeader();
    displayHomePage();
}();