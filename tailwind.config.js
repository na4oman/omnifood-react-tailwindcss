/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#e67e22',
        tints: '#fdf2e9',
        shades: '#cf711f',
        'gray-dark': '#333',
        'gray-light': '#555',
      },
      transitionProperty: {
        width: 'width',
      },
    },
    fontFamily: {
      body: 'Rubik',
    },
  },
  plugins: [],
}
