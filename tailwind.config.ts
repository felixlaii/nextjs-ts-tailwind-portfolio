/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
 
  ],
  presets: [require("./tailwind-preset")],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundColor: {
        'dark': '#1F2933' , // Dark mode background color
      },
      textColor: {
        'dark': '#F3F4F6', // Dark mode text color
      },
      fontFamily: {
        custom: ["bebasNeue", 'sans-serif'],
      }
    },
  },
  variants: {
  },
  plugins: [],
};
