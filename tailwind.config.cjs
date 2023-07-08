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
      screens: {
        fullDesktop: { max: '1660px' },
        // => @media (max-width: 1660px) { ... }

        desktop: { max: '1440px' },
        // => @media (max-width: 1440px) { ... }

        laptop: { max: '1024px' },
        // => @media (max-width: 1024px) { ... }

        tablet: { max: '768px' },
        // => @media (max-width: 768px) { ... }

        mobile: { max: '480px' },
        // => @media (max-width: 480px) { ... }
      },
    },
  },
  plugins: [],
};
