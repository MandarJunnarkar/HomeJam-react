module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero-img": "url('./images/jumbotron.png')"
      },
      backgroundColor:{
        "blue-black": "rgba(10, 11, 26, 1)",
        "dark-blue": "rgba(17, 18, 41, 1)"
      },
      colors: {
        "bluish": "rgba(2, 89, 235, 1)",
      },

      spacing:{
        '268': '268px',
        '387': '387px'
      }
    },
    fontFamily:{
      'libre-baskerville': ['Libre Baskerville', 'serif']
    }
  },
  plugins: [],
}