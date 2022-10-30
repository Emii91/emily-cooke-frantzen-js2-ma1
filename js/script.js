import { renderProducts } from "./ui/renderProducts.js";
import { searchProducts } from "./ui/searchProducts.js";
import { displayMessage } from "./ui/displayMessage.js";


const url = "https://fakestoreapi.com/products";

async function getProducts() {
    try {
        const response = await fetch(url);
        const product = await response.json();

        console.log(product);

        renderProducts(product);
        searchProducts(product);
    } catch (error) {
        console.log(error);
        displayMessage("error", error, ".product-container");
    }
}

getProducts();


