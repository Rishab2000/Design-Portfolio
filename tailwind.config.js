module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {
      zIndex: {
        "-10": "-10",
      },
      backgroundImage: (theme) => ({
        "sd-plus": "url('/src/img/sdplus_mockup1.png')",
        chiral: "url('/src/img/chiral2.png')",
        "coding-challenge": "url('/src/img/CSS_Challenges_Portfolio.svg')",
        behance: "url('/src/img/behance1.png')",
        ibm: "url('/src/img/IBM.png')",
      }),
    },
    fontFamily: {
      "avenir-roman": ["avenir-roman"],

      "avenir-book": ["avenir-book"],

      "avenir-medium": ["avenir-medium"],

      "avenir-bold": ["avenir-bold"],

      "avenir-black": ["avenir-black"],
    },
    colors: {
      "title-colour": "#161616",
      "desc-colour": "#525252",
      gray40: "#a8a8a8",
      gray20: "#e0e0e0",
      "link-hover-color": "#be203d",
      red: "#ff2d55",
      "background-color": "#F3F6FB",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
