const menu = document.querySelector(".links-navegacao");
const toggle = document.querySelector(".menu-toggle");

toggle.addEventListener("click", () => {
    menu.classList.toggle("active");
});