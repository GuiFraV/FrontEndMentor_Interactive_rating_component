/** @type {import('tailwindcss').Config} */
const colors = require("./src/utils/colors");
const defaultTheme = require('tailwindcss/defaultTheme')
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens : {
      "xs": "375px",
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        ...colors
      }
    },
    
  },
  plugins: [],
}