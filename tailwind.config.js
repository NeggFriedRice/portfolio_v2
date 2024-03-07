/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'block-xs': '0.25rem 0.25rem black',
        'block-sm': '0.5rem 0.5rem black',
        'block-smmd': '0.75rem 0.75rem black',
        'block-md': '1rem 1rem black',
        'block-lg': '1.5rem 1.5rem black',
      },
      keyframes: {
        bobble: {
          '0%, 100%': {transform: 'rotate(-1deg)'},
          '50%': {transform: 'rotate(15deg)'},
        },
        breathe: {
          '0%, 100%': {transform: 'scale(1)'},
          '50%': {transform: 'scale(1.05)'}
        }
      },
      animationDuration: {
        '1s': '1s',
        '1.25s': '1.25s',
        '1.5s': '1.5s',
        '2s': '2s',
        '5s': '5s',
      },
      animation: {
        bobble: 'bobble 3s ease-in-out infinite',
        bobbleFast: 'bobble 1s ease-in-out infinite',
        breathe: 'breathe 2s ease-in-out infinite',
      },

      transitionDuration: {
        '1s': '1s',
        '1.25s': '1.25s',
        '1.5s': '1.5s',
        '2s': '2s',
      }
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require("tailwindcss-animate"),
  ],
}

