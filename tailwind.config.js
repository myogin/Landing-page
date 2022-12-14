/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        // background
        "bg-primary": "#323647",
        "bg-secondary": "#282B38",
        // text color
        "text-primary": "#FFFFFF",
        "text-secondary": "#777A85",
        "text-tosca": "#02C68C",
        // button color
        "btn-primary": "#00CC8F",
        "btn-secondary": "#3F4353",
      },
      fontFamily: {
        "roboto-font": ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
