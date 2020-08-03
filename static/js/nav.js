const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll("li");
const hamburger = document.querySelector(".hamburger");

hamburger.addEventListener("click", () => {
    links.forEach((link) => {
        link.classList.toggle("fade");
    });
    navLinks.classList.toggle("open");
    hamburger.classList.toggle("open");
});


navLinks.addEventListener("click", () => {
    if (window.matchMedia("(max-width: 795px)").matches) {
        links.forEach((link) => {
            link.classList.toggle("fade");
        });
        navLinks.classList.toggle("open");
        hamburger.classList.toggle("open");
    }
})