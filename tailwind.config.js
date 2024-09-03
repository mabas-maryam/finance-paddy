/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#008FFB",
        appGrey: "#374151",
        hoverColor: "#68923C",
        secondary: "#2357BC",
        sideBarHover: "#36A7FC",
      },

      fontFamily: {
        primaryFont: ["Raleway", "sans-serif"],
        secondaryFont: ["Roboto", "sans-serif"],
        tertiaryFont: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};
