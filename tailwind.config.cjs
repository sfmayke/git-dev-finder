/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
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
    },
  },
  plugins: [],
};
