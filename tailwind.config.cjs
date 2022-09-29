/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [],
  theme: {
    backgroundColor: theme => ({
      'primary': '#F37255',
      'secondary': '#6EE6B6',
      'tableheader': '#F8F9FA',
      'white': '#fff',
      'grey': '#F8F9FA'
    }),
    textColor: {
      'primary': '#F37255',
      'secondary': '#fff',
      'third': '#000',
    },
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
