export default {
    content: ["./*.html"],
    theme: {
        extend: {
            fontFamily: {
                sans: ["Barlow Semi Condensed", "sans-serif"],
            },
            spacing: {
                180: "32rem",
            },
        },
    },
    plugins: ["@tailwindcss/line-clamp"],
};
