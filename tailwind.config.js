/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin') // Change this later if its not needed??


module.exports = {
  mode: 'jit',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes:{
        'trans-down':{
          '60%':{transform: 'translateY(50px)'}, // Need to fix this animation later, need delay for each icon and to be able to do it correctly.
          
        }
      },
      animation: {
        'trans-down': 'trans-down 1s ease-in-out '
      },
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

  plugins: [
    plugin(function ({ matchUtilities, theme}){
      matchUtilities(
        {
          'animate-delay' : (value) => ({

          }),
        },
        {values: theme('transitionDelay')}
      )
    })
  ],
}

