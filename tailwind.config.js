/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blush-pink': '#F1C4D6', // A soft, gentle pink
        'warm-rose': '#D8A0A8', // A deeper, warmer pink
        'cream': '#F9F1E9',     // A soft, creamy off-white
        'lavender': '#E6E0F4',  // A light, airy lavender
        'warm-brown': '#5D4037', // A rich, warm brown for text
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['"Montserrat"', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'slide-up': 'slideUp 0.8s ease-out forwards',
        'petal-fall': 'petalFall 15s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        slideUp: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        petalFall: {
          '0%': { transform: 'translateY(-10%)', opacity: 0 },
          '10%': { opacity: 1 },
          '100%': { transform: 'translateY(100vh) rotate(360deg)', opacity: 0.5 },
        }
      },
    },
  },
  plugins: [],
}