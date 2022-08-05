/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      ...colors,
      main: {
        light: '#04d1e0',
        DEFAULT: '#00afb9',
        dark: '#107d85',
      },
    },
  },
  plugins: [],
};
