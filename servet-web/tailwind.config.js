/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#7e6bdb',
        'primary-light': '#9a91e8',
        'primary-dark': '#684cb6',
        accent: '#b2b1f0',
        'accent-light': '#cecef7',
        background: '#f0f1fd',
        'background-light': '#e4e5fb',
        'text-dark': '#2a2244',
        'text-light': '#2a2244',
        'text-medium': '#2a2244',
        'true-v': {
          50: '#f0f1fd',
          100: '#e4e5fb',
          200: '#cecef7',
          300: '#b2b1f0',
          400: '#9a91e8',
          500: '#7e6bdb',
          600: '#785ccf',
          700: '#684cb6',
          800: '#554093',
          900: '#473976',
          950: '#2a2244',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'float-slow': 'float-slow 20s ease-in-out infinite',
        'float-medium': 'float-medium 15s ease-in-out infinite',
        'float-reverse': 'float-reverse 25s ease-in-out infinite',
        'pulse': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      animationDelay: {
        '1000': '1000ms',
        '2000': '2000ms',
        '3000': '3000ms',
        '4000': '4000ms',
      },
    },
  },
  plugins: [],
}