/* eslint-disable no-undef */
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      },
      height: {
        110: '480px',
        100: '420px',
      },
    },
    fontFamily: {
      satisfy: ['Satisfy', 'cursive'],
      quicksand: ['Quicksand', 'sans-serif'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
