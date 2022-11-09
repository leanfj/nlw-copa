/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],

      },
      colors: {
        gray: {
          app: '#121214'
        }
      }
    },
  },
  plugins: [],
}
