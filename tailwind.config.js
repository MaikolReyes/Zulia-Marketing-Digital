/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html',
    './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        customViolet: '#7869ff',
      },
      fontFamily: {
        'myCustomFont': ['"League Spartan"', 'sans-serif'], 'myCustomFontSecondary': ["Rubik", 'sans-serif'], 'navbarFont': ["Raleway", 'sans-serif']
      },
      screens: {
        'sx': '480px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      }
    },
  },
  plugins: [],
}

