// Mobile Navigation

const menuButton = document.getElementById("menu-toggle");
const navbar = document.getElementById("navbar");

menuButton.addEventListener("click", function () {

    navbar.classList.toggle("open");

    const isOpen = navbar.classList.contains("open");

    menuButton.setAttribute("aria-expanded", isOpen);

});


// Restaurant Search

const searchInput = document.getElementById("search");

const restaurants = document.querySelectorAll(".restaurant-card");

const noResults = document.getElementById("no-results");


searchInput.addEventListener("input", function () {

    let searchValue = searchInput.value.toLowerCase();

    let count = 0;

    restaurants.forEach(function (restaurant) {

        let restaurantName =
            restaurant.textContent.toLowerCase();

        if (restaurantName.includes(searchValue)) {

            restaurant.hidden = false;
            count++;

        } else {

            restaurant.hidden = true;

        }

    });

    noResults.hidden = count !== 0;

});