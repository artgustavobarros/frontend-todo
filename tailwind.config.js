/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "linear-gradient(to right bottom, rgba(59, 163, 149, 0.8), rgba(117, 216, 213, 0.9)), url('/src/assets/wood-bg.jpg')"
      },
      colors: {
        header: '#c38d9e',
        background: '#eee',
        white: '#f7f7f7',
        'text-pattern': '#501f3a',
        'text-pattern-two': '#141414',
        border: '#b9b9b9',
        'green-checkbox': '#3ba395',
        'bg-overlay':'rgba(0, 0, 0, 0.3)',
        'bg-dialog-color':'rgba(255, 255, 255, 0.5)',
        'text-line-through': '#8d8d8d'
      }
    },
  },
  plugins: [require('tailwind-scrollbar')],
}