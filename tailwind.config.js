/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      backgroundImage: {
        'main-bg': "url('/images/backgrounds/liquinox.png')"
      },
      colors: {
        veryDarkBlue: 'hsl(230, 10%, 11%)',
        darkBlue: 'hsl(232, 20%, 21%)',
        darkLapis: 'hsl(246, 16%, 40%)',
        navy: 'hsl(243, 31%, 41%)',
        lapis: 'hsl(239, 19%, 53%)',
        coolWhite: 'hsl(300, 31%, 94%)',
        dullBlue: 'hsl(199, 51%, 57%)',
        skyBlue: 'hsl(178, 51%, 77%)'
      }
    },
  },
  plugins: [],
}

