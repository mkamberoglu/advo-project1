/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        lato: ["Lato", "sans-serif"],
        merriweather: ['Merriweather', 'serif'],
        gemunu: ['Gemunu Libre', 'sans-serif']
      },

      colors: {
        "advo-main": "#2C3639",
        "advo-purple": "#301E67", 
        "advo-yellow": "#F6F7C1", 
        "advo-beige": "#B6EADA", 
        "advo-blue": "#5B8FB9"
      }
    },
  },
  plugins: [],
}
