document.querySelectorAll(".testimonial-card").forEach((card) => {
    const text = card.querySelector(".testimonial-quote-secondary");
    const btn = card.querySelector(".clamp-trigger-btn");

    if (!text || !btn) return;

    let expanded = false;

    function updateClampTriggerBtnState() {
        if (expanded) {
            btn.classList.remove("hidden");
            btn.textContent = "See less";
        } else if (text.scrollHeight > text.clientHeight) {
            btn.classList.remove("hidden");
            btn.textContent = "See more";
        } else {
            btn.classList.add("hidden");
        }
    }

    // capture all clamp-related classes of that text .. dynamically
    const clampClasses = [...text.classList].filter((c) =>
        c.includes("line-clamp"),
    );

    btn.addEventListener("click", () => {
        expanded = !expanded;

        if (expanded) {
            text.classList.remove(...clampClasses);
        } else {
            text.classList.add(...clampClasses);
        }

        updateClampTriggerBtnState(); // re-evaluate after toggle
    });

    window.addEventListener("load", updateClampTriggerBtnState);
    window.addEventListener("resize", updateClampTriggerBtnState);
});
