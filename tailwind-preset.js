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
                    evenDarker: "#1F2933",
                    lightest: "#83a6d3",
                    lighter: "#6D8FBA",
                    light: "#395c6b",
                    base: "#88aebf",
                    dark: "#1F2933",
                    darkest: "#1d2d35",
                    lightish: "#84a0b0",
                    darkMode: "#6A98B0",
                    bgdark: "#81BBDA",
                    textDark: "#F3F4F6",
                    cardbg: "#668998",
                    headerbg: "#304A64",
                    lightMode: "#8EABB8"
                },
                ui: {
                    error: red[700],
                },
            },
        },
        textShadow: {
            sm: "0 1px 10px var(--tw-shadow-color)",
            DEFAULT: "0 2px 10px var(--tw-shadow-color)",
            lg: "0 8px 25px var(--tw-shadow-color)",
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
    },
    plugins: [
        require("@tailwindcss/forms"),
        plugin(function ({ addUtilities}) {
            const utilities = {
                ".text-3d": {
                    textShadow: "4px 4px 4px rgba(0, 0, 0, 0.3)",
                    transform: "perspective(100px)"
                  },
                  ".header-transition": {
                    transition: "top 2s ease",
                    top: "5%"
                  }
            };
            addUtilities(utilities)
        })
    ]
    
}