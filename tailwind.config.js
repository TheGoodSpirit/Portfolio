/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
export default {
  content: [
    './src/**/*.{html,js,jsx}',
    './public/index.html',
  ],
  theme: {
    colors : {
      primary : '#101820',
      secondary : '#FEE715',
      black: colors.black,
      white: colors.white,
      neutral: {
        100 : '#F9FAFB',
        200 : '#F3F4F6',
        500 : '#E5E7EB',
        800 : '#D1D5DB',
        900 : '#9CA3AF',
      },
      transparent: 'transparent'
    },
    extend: {},
  },
  plugins: [],
}