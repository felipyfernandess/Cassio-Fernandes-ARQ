const menu = document.querySelector(".links-navegacao");
const toggle = document.querySelector(".menu-toggle");
const links = document.querySelectorAll(".links-navegacao a");

if (toggle && menu) {
    toggle.addEventListener("click", () => {
        menu.classList.toggle("active");
    });
}

links.forEach((link) => {
    link.addEventListener("click", () => {
        if (window.innerWidth <= 768 && menu.classList.contains("active")) {
            menu.classList.remove("active");
        }
    });
});