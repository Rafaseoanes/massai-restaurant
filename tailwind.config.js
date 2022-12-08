/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {

      backgroundImage: {
        
        'about-background': "url('https://i.ibb.co/X8BfjFm/BG-leaf.jpg')",
        'header-background': "url('https://i.ibb.co/Zc74kx8/marble-background.jpg')",
      },
      fontFamily: {
        customTitles: "'Cormorant Garamond', serif",
        customText: "'Open Sans', sans-serif"
      }

    },
  },
  plugins: [],
}