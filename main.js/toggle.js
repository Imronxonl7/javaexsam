let toggle = document.getElementById("toggle");
let categoryCards = document.getElementById("category-cards");

toggle.addEventListener("click", function () {
    categoryCards.classList.toggle("translate-y-[50px]");
});