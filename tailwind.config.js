/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'wood-pattern': "linear-gradient(to right bottom, rgba(59, 163, 149, 0.8), rgba(117, 216, 213, 0.9)), url('/src/assets/wood-bg.jpg')"
      },
      colors: {
        'primary-header': '#c38d9e',
        bg:{
          light: '#eee',
          suface: '#f7f7f7',
          overlay: 'rgba(0, 0, 0, 0.3)',
          dialog:'rgba(255, 255, 255, 0.5)',
        },
        text:{
          primary: '#501f3a',
          secondary: '#141414',
          muted: '#8d8d8d'
        },
        border: '#b9b9b9',
        'checkbox-active': '#3ba395',
      },
      boxShadow: {
        'pattern': '0 2rem 4rem rgba(0, 0, 0, 0.6)',
        'pattern-two': '0.2rem 0.5rem 1rem rgba(0, 0, 0, 0.4)'
      },
      keyframes: {
        moveInRight:{
          '0%': {
              opacity: '0',
              transform: 'translateX(10rem)'
            },
          '100%': {
              opacity: '1',
              transform: 'translateX(0)',
            },
        },
        blowUpModalOpen:{
          '0%':{
            transform: 'scale(0) translate(-50%, -50%)',
            },
          '100%':{
            transform: 'scale(1) translate(-50%, -50%)',
          }
        },
        blowUpModalClose:{
          '0%':{
            transform: 'scale(1) translate(-50%, -50%)',
            },
          '100%':{
            transform: 'scale(0) translate(-50%, -50%)',
          }
        }
      },
      animation: {
        moveInRight: 'moveInRight 1.7s',
        moveInRightFaster: 'moveInRight 0.5s',
        blowUpModalOpen: 'blowUpModalOpen 0.5s cubic-bezier(0.165, 0.840, 0.440, 1.000) forwards',
        blowUpModalClose: 'blowUpModalClose 0.5s cubic-bezier(0.165, 0.840, 0.440, 1.000) forwards'
      },
      screens:{
        sm: '500px',
        md: '760px',
        lg: '1285px'
      }
    },
  },
  plugins: [require('tailwind-scrollbar')],
}