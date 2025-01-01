/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm': '480px',     // Small devices (phones)
        'md': '768px',     // Medium devices (tablets)
        'lg': '1024px',    // Large devices (laptops)
        'xl': '1280px',    // Extra large devices (desktops)
        '2xl': '1536px',   // 2X large devices
      },
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

