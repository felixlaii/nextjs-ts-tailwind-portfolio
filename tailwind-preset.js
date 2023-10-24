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
        textShadow: {
            sm: "0 1px 10px var(--tw-shadow-color)",
            DEFAULT: "0 2px 10px var(--tw-shadow-color)",
            lg: "0 8px 16px var(--tw-shadow-color)",
        },
        zIndex: {
            0: "0",
            10: "10",
            20: "20",
            30: "30",
            40: "40",
            50: "50",
            60: "60",
            70: "70",
            80: "80",
            90: "90",
            100: "100",
        }
    }
}