
const url = "https://myschoolprojectworld.no/conciouscoffee/wp-json/wc/store/products";
const productContainer = document.querySelector(".products");


async function getProducts() {
    try {
        const response = await fetch(url);
        const getResults = await response.json();
        createHTML(getResults);
    }

    catch (error) {
        console.log(error);
    }
}

getProducts();

function createHTML(products) {
    products.forEach(function (product) {
        console.log(product);
        productContainer.innerHTML +=
            `<div> 
        <h2>${product.name}</h2>
        <img src="${product.images[0].src}" alt="${product.name}">
        </div>`;
    })
}