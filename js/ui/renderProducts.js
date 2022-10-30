export function renderProducts(productsToRender) {
    const productContainer = document.querySelector(".product-container");
    productContainer.innerHTML = "";

    productsToRender.forEach(function (product) {
        productContainer.innerHTML += `<div class="product">
                                        <i class="far fa-heart" data-id="${product.id}" data-price="${product.price}"></i>
                                        <h2>${product.title}</h2>
                                        <h3>${product.price}</h3>
                                    </div>`;
    });
}


