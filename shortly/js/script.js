"use strict";

//-------------- Hamburger menu ----------------
const hamburgerBtn = document.querySelector(".hamburger-btn");
const mainNav = document.querySelector("#main-nav");
const mainNavList = document.querySelector(".main-nav-list");

//toggle hamburger menu
hamburgerBtn.addEventListener("click", () => {
    const isExpanded = mainNav.classList.toggle("nav-open");
    hamburgerBtn.setAttribute("aria-expanded", isExpanded ? "true" : "false");
});

//close hamburger menu when link is clicked
mainNavList.addEventListener("click", (event) => {
    if (event.target.tagName !== "A") return;
    mainNav.classList.remove("nav-open");
    hamburgerBtn.setAttribute("aria-expanded", "false");
});
