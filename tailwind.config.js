/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'background': '#FDF8F5',
        'text-primary': '#333333',
        'text-secondary': '#888888',
        'primary': '#E4A596',
        'accent': '#F0B2A3',
        'border': '#E0D8D5',
        'peach': '#F5E3E0',
        'blush-pink': '#FADCD9',
      },
      screens: {
        'xs': '475px',
      },
      fontFamily: {
        'serif': ['"Playfair Display"', 'serif'],
        'sans': ['"Montserrat"', 'sans-serif'],
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