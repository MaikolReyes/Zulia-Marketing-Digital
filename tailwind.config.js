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
        'myCustomFont': ["League Spartan", 'sans-serif'], 'myCustomFontSecondary': ["Rubik", 'sans-serif'], 'navbarFont': ["Raleway", 'sans-serif']
      },
      screens: {
        'mobile': '480px',
        'tablet': '640px',
        'laptop': '1024px',
      }
    },
  },
  plugins: [],
}

