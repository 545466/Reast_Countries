/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      "DarkBlue" : '#2b3945',
      "DMB": '#202c37',
      "LMT" : '#111517',
      "LMI" : '#858585',
      "LMB" : '#fafafa',
      "DMT" : '#ffffff',
    },
    extend: {},
  },
  plugins: [],
  darkMode: "class"
}

