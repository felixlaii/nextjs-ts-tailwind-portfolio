const customPreset = require("./tailwind-preset");
const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  presets: [customPreset],
  darkMode: "class",
  theme: {
    extend: {
      backgroundColor: {
        dark: "#1F2933",
      },
      textColor: {
        dark: "#F3F4F6",
      },
      fontFamily: {
        custom: ["bebas", "sans-serif"],
      },
    },
  },
  variants: {},
  plugins: [],
};
