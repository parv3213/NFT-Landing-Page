/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        black: '#202020',
        skin: 'rgb(238, 237, 222)',
      },
      animation: {
        linear: 'move 20s linear infinite normal',
        'linear-reverse': 'move 20s linear infinite reverse',
      },
      keyframes: {
        move: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
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
