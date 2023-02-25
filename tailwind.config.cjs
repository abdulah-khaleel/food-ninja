/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#FF6363',
        secondary: {
          100: '#E2E2D5',
          200: '#888883',
        },
        reddish: 'rgb(229 62 61)',
      },
      fontFamily: {
        body: ['Nunito'],
      },
    },
  },
  plugins: [],
};
