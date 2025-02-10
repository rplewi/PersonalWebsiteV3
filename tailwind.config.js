const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin') // Change this later if its not needed??



module.exports = {
  mode: 'jit',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      fontFamily:{
        rubik:['Rubik']
      },
      keyframes:{
        'trans-down':{
          '100%':{transform: 'translateY(-50px)'}, // Need to fix this animation later, need delay for each icon and to be able to do it correctly.
          
        }
      },
      animation: {
        'trans-down': 'trans-down 1s ease-in-out '
      },
      colors: {
        'color1' : '#293431',
        'color2' : '#151616',
        'color3' : '#45AA96',
        'color4' : '#05CEA8',
      },
    },
  },
  
  /** CAN DO COLORS WITH 
    colors: {
    'COLOR NAME HERE' : 'hex color here'
    So its all user specified instead of having the basic colors.
    } */

  plugins: [
    flowbite.plugin(),
  ],
}

