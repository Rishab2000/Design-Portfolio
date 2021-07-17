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
    colors: {

      'title-colour': '#161616',
      'desc-colour': '#525252',
      'link-hover-color': '#be203d',
      'red': '#ff2d55',
      'background-color': '#F3F6FB',

    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
