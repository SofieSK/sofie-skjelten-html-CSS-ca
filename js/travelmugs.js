const travelContainer = document.querySelector(".travel");

const url = "https://myschoolprojectworld.no/conciouscoffee/product/travel-mugs/"

async function fetchProduct() {
    try {
        const response = await fetch(url);
        const travel = await response.json();

        console.log(travel);

        createHTML(travel);
    }

    catch (error) {
        console.log(error);
        travelContainer.innerHTML = message("error", error);
    }
}

fetchProduct();

function createHTML(travel) {
    travelContainer.innerHTML = `<div> 
    <h2>${travel.name}</h2>
    <img src="${travel.images[0].src}" alt="${travel.name}">
    </div>`;
}

