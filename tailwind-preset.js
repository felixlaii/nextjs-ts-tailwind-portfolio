const { red } = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");
const plugin = require("tailwindcss/plugin");

const round = (num) =>
  num
    .toFixed(7)
    .replace(/(\.[0-9]+?)0+$/, "$1")
    .replace(/\.0$/, "");
const rem = (px) => `${round(px / 16)}rem`;
const em = (px, base) => `${round(px / base)}em`;

module.exports = {
    variants: {
        animation: ["motion-safe"],
    },
    theme: {
        extend: {
            colors: {
                current: "currentColor",
                brand: {
                    evenLighter: "",
                    light: "",
                    base: "",
                    dark: "",
                    darkest: "",
                },
                ui: {
                    error: red[700],
                },
            },
        },
    
    }
}