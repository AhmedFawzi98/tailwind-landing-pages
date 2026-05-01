"use strict";
//------------------------------------ toggle dark mode -------------------------------------
const themeToggleBtn = document.getElementById("theme-toggle");
const themeToggleDarkIcon = document.getElementById("theme-toggle-dark-icon");
const themeToggleLightIcon = document.getElementById("theme-toggle-light-icon");
const userTheme = localStorage.getItem("color-theme");
const currentThemeIsDark = document.documentElement.classList.contains("dark");
const isDark = userTheme === "dark" || !userTheme && currentThemeIsDark;
//on load
setTheme(isDark);
//on click
themeToggleBtn.addEventListener("click", ()=>{
    const newIsDark = !document.documentElement.classList.contains("dark");
    setTheme(newIsDark);
});
function setTheme(isDark) {
    themeToggleDarkIcon.classList.toggle("hidden", isDark);
    themeToggleLightIcon.classList.toggle("hidden", !isDark);
    document.documentElement.classList.toggle("dark", isDark);
    localStorage.setItem("color-theme", isDark ? "dark" : "light");
}

//# sourceMappingURL=fylo.1c974c2f.js.map
