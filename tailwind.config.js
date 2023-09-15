const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}'
  ],
  theme: {
    extend: {
      fontFamily: {
        raleway: ['Raleway', 'sans-serif'],
        eukraine: ['e-ukrainehead', 'sans-serif']
      },
      colors: {
        'primary-1': '#0066CC',
        'primary-2': '#3333A7',
        'content-1': '#232323',
        'yellow-2': '#FFE601',
        'white-1': '#FAFAFA'
      }
    }
  },
  plugins: []
}
