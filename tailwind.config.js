/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          gold: '#B08D57',
          goldDark: '#977647',
          goldLight: '#cba770',
          goldSoft: '#fbf7ee',
        },
        amber: {
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'gold-sm': '0 2px 10px rgba(176, 141, 87, 0.15)',
        'gold-md': '0 8px 25px rgba(176, 141, 87, 0.25)',
        'gold-lg': '0 12px 35px rgba(176, 141, 87, 0.35)',
      }
    },
  },
  plugins: [],
}

