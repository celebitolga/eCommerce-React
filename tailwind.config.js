const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      ...colors,
      transparent: 'transparent',
      commerceYellow: '#FFD100',
      commerceRed: '#941B0C',
      commercePink: 'rgb(237, 0, 140)',
      commerceGray: '#808080',
      commerceBlack: {
        DEFAULT: '#000000',
        '500': 'rgba(0, 0, 0, 0.5)',
      },
    }
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}