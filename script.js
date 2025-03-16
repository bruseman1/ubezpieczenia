// Smooth scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
document.querySelectorAll(".toggleButton").forEach(button => {
    button.addEventListener("click", () => {
        const container = button.previousElementSibling;
        const fade = container.querySelector(".fade");

        if (container.style.maxHeight === "none") {
            container.style.maxHeight = "6em";
            fade.classList.remove("hidden");
            button.textContent = "Więcej";
        } else {
            container.style.maxHeight = "none";
            fade.classList.add("hidden");
            button.textContent = "Zwiń";
        }
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const nav = document.querySelector("nav");

    menuToggle.addEventListener("click", function () {
        nav.classList.toggle("nav-active");
    });
});
