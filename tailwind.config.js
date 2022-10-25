/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        black: '#202020',
        skin: 'rgb(238, 237, 222)',
      },
    },
  },
  screens: {
    xs: '480px',
    ss: '620px',
    sm: '768px',
    md: '1060px',
    lg: '1200px',
    xl: '1700px',
  },
  plugins: [],
}
