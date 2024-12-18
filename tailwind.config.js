/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'color1' : '#7C807F',
        'color2' : '#F7F7F6',
        'color3' : '#1E2F35',
        'color4' : '#E5BC57',
      },
    },
  },
  
  /** CAN DO COLORS WITH 
    colors: {
    'COLOR NAME HERE' : 'hex color here'
    So its all user specified instead of having the basic colors.
    } */

  plugins: [],
}

