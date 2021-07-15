module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {

      'avenir-roman': ['avenir-roman'],

      'avenir-book': ['avenir-book'],

      'avenir-medium': ['avenir-medium'],

      'avenir-bold': ['avenir-bold'],

      'avenir-black': ['avenir-black'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
