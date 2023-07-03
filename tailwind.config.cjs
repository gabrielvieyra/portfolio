/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{tsx,jsx,js,ts}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // black: '#181818',
        // grey: '#f2f2f2',
        // lightGrey: '#828282',
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
