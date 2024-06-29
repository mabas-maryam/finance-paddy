/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#82B74B',
        appGrey: '#374151'
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