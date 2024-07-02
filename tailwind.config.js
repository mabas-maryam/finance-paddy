/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#7151A9',
        appGrey: '#374151',
        hoverColor: '#68923C',
        secondary: '#AC8BEE'
      },

      fontFamily: {
        primaryFont: ["Raleway", "sans-serif"],
        secondaryFont: ["Roboto", "sans-serif"],
        tertiaryFont: ["Montserrat", "sans-serif"]
      }
    },
  },
  plugins: [],
}