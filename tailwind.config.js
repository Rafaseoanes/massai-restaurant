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
      }

    },
  },
  plugins: [],
}