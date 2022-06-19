module.exports = {
  mode: 'jit',
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        primary: ['Inter', 'ssans-serif'],
      },
      colors: {
        primary: '#0F172A',
        accent: '#2DD4BF',
        'white-secondary': '#d4d8d8',
      },
      transitionProperty: {
        bg: 'background-color',
      },
      transitionTimingFunction: {
        'out-sine': 'cubic-bezier(0.61, 1, 0.88, 1)',
      },
      transitionDuration: {
        400: '400ms',
      },
    },
  },
  plugins: [],
};
