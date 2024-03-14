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
          '0%, 100%': {transform: 'scale(100%)'},
          '50%': {transform: 'scale(105%)'}
        },
        float: {
          '0%' : { transform: 'translateY(0px)'},
          '50%' : { transform: 'translateY(5px)'},
          '100%' : { transform: 'translateY(0px)'},
        }
      },
      animationDuration: {
        '1s': '1s',
        '1.25s': '1.25s',
        '1.35s': '1.35s',
        '1.45s': '1.45s',
        '1.5s': '1.5s',
        '1.55s': '1.55s',
        '1.6s': '1.6s',
        '1.65s': '1.65s',
        '1.75s' : '1.75s',
        '1.8s' : '1.8s',
        '1.85s' : '1.85s',
        '1.9s' : '1.9s',
        '1.95s' : '1.95s',
        '2s': '2s',
        '2.25s' : '2.25s',
        '2.5s' : '2.5s',
        '3s': '3s',
        '5s': '5s',
      },
      animation: {
        bobble: 'bobble 3s ease-in-out infinite',
        bobbleFast: 'bobble 1s ease-in-out infinite',
        breathe: 'breathe 2s ease-in-out infinite',
        float: 'float ease-in-out infinite',
      },

      transitionDuration: {
        '1s': '1s',
        '1.25s': '1.25s',
        '1.5s': '1.5s',
        '2s': '2s',
      },

      rotate: {
        '360': '360deg'
      },

      borderWidth: {
        '1': '1px'
      }
    },
  },
  screens: {
    'xs': '361px',
    'sm': '420px',
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require("tailwindcss-animate"),
  ],
}

