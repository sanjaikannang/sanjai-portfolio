/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Roboto: ['Roboto', 'sans-serif'],
      },
      colors: {
        colorblue: "#222650", 
        colorred: "#D62E49", 
        colorwhite: "#EEEEF2", 
      },
    },
  },
  plugins: [],
}

