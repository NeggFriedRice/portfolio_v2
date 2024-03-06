/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'block-sm': '0.5rem 0.5rem black',
        'block-md': '1rem 1rem black',
        'block-lg': '1.5rem 1.5rem black',
      },
      keyframes: {
        bobble: {
          '0%, 100%': {transform: 'rotate(-1deg)'},
          '50%': {transform: 'rotate(15deg)'},
        },
      },
      animation: {
        bobble: 'bobble 3s ease-in-out infinite',
        bobbleFast: 'bobble 1s ease-in-out infinite'
      }
    },
  },
  plugins: [],
}

