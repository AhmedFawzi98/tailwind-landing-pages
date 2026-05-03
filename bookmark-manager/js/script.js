"use strict";
//------------------------------------------- hamburger menu -------------------------------------------
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

//------------------------------------------- tabbed component -------------------------------------------
const tabsBtns = document.querySelectorAll(".tab");
const tabPanels = document.querySelectorAll(".tab-panel");
tabsBtns.forEach((tabBtn) => tabBtn.addEventListener("click", onTabClick));

function onTabClick(clickEvent) {
    //select tab
    tabsBtns.forEach((tabBtn) => tabBtn.classList.remove("selected"));
    tabsBtns.forEach((tabBtn) => tabBtn.setAttribute("aria-selected", "false"));
    const selectedTab = clickEvent.currentTarget;
    selectedTab.classList.add("selected");
    selectedTab.setAttribute("aria-selected", "true");

    //show corresponding tab panel
    const targetPanelId = selectedTab.dataset.target;
    tabPanels.forEach((tabPanel) => tabPanel.classList.remove("selected"));
    const targetPanel = document.getElementById(targetPanelId);
    targetPanel.classList.add("selected");
}

//------------------------------------------- accordion -------------------------------------------
const accordionBtns = document.querySelectorAll(".accordion-btn");
accordionBtns.forEach((accordionBtn) =>
    accordionBtn.addEventListener("click", onAccordionBtnClick),
);

function onAccordionBtnClick(clickEvent) {
    const accordionBtn = clickEvent.currentTarget;
    const accordionItem = accordionBtn.closest(".accordion-item");
    const isExpanded = accordionItem.classList.toggle("expanded");
    accordionBtn.setAttribute("aria-expanded", isExpanded ? "true" : "false");
}
