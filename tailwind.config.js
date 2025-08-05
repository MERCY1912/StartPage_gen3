/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'brand-pink': '#FFC0CB',
        'brand-rose': '#F472B6',
        'brand-purple': '#D946EF',
        'brand-light': '#FDF2F8',
        'brand-dark': '#1E1B1D',
        'brand-text': '#4B4448',
      },
      screens: {
        'xs': '475px',
      },
      fontFamily: {
        'serif': ['Nunito', 'serif'],
        'sans': ['Inter', 'sans-serif'],
      },
      animation: {
        'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 3s ease-in-out infinite',
        'gradient-x': 'gradient-x 3s ease infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'gradient-x': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          }
        }
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'glow': '0 0 20px rgba(251, 194, 219, 0.4)',
        'glow-purple': '0 0 20px rgba(197, 163, 255, 0.4)',
      }
    },
  },
  plugins: [],
};