const customPreset = require("./tailwind-preset");
const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  presets: [require("./tailwind-preset")],
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
      // animation: {
      //   fade: "fadeIn 1.2s ease-in-out",
      //   spinIn: "spin-once 1s linear",
      // },

      // keyframes: {
      //   fadeIn: {
      //     from: { opacity: 0 },
      //     to: { opacity: 1 },
      //   },
      //   spinOnce: {
      //     from: { transform: "rotate(0deg)" },
      //     to: { transform: "rotate(360deg)" },
      //   },
      // },
    },
  },
  variants: {},
  plugins: [],
};
