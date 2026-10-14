const themeToggle = document.getElementById("theme-toggle");
const themeIcon = document.getElementById("theme-icon");
const themeLabel = document.getElementById("theme-label");
const root = document.documentElement;

function applyTheme(theme) {
    root.setAttribute("data-theme", theme);
    const isDark = theme === "dark";
    themeIcon.textContent = isDark ? "☀" : "☾";
    themeLabel.textContent = isDark ? "Light mode" : "Dark mode";
    themeToggle.setAttribute("aria-pressed", String(isDark));
}

let savedTheme = "light";

try {
    const storedTheme = localStorage.getItem("neha-portfolio-theme");
    if (storedTheme === "light" || storedTheme === "dark") {
        savedTheme = storedTheme;
    }
} catch (error) {
    // The portfolio still works if browser storage is unavailable.
}

applyTheme(savedTheme);

themeToggle.addEventListener("click", function () {
    const currentTheme = root.getAttribute("data-theme");
    const nextTheme = currentTheme === "dark" ? "light" : "dark";
    applyTheme(nextTheme);

    try {
        localStorage.setItem("neha-portfolio-theme", nextTheme);
    } catch (error) {
        // Theme switching still works for this page view.
    }
});

document.getElementById("current-year").textContent = new Date().getFullYear();

const navigationLinks = document.querySelectorAll(".nav-link");

navigationLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        navigationLinks.forEach(function (item) {
            item.classList.remove("active");
        });
        link.classList.add("active");
    });
});
