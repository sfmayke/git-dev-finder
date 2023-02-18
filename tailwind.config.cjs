/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      desktop: '1440px',
    },
    extend: {
      colors: {
        'primary-blue': '#0079FF',
        'secondary-grey': '#697C9A',
        'secondary-blue': '#4B6A9B',
        'secondary-dark-blue': '#2B3442',
        'neutral-gray': '#F6F8FF',
        'neutral-dark-blue-900': '#141D2F',
        'neutral-dark-blue-700': '1E2A47',
      },
      boxShadow: {
        custom: '0px 16px 30px -10px rgba(70, 96, 187, 0.198567)',
      },
      fontFamily: {
        'space-mono': ['Space Mono', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
