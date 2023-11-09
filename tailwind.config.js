/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'geomanist': 'geomanistregular',
      },
      fontSize: {
        'display': '2rem',
        'forty': '2.5rem',
        'body': '4rem'
      },
      maxWidth: {
        'base': '97.5rem'
      },
      colors: {
        dark: '#1A1820',
        brand: {
          pink: {
            500: '#FA1A7C',
          },
          red: {
            600: '#F44'
          }
        },
      },
      lineHeight: {
        '12': '48px',
        '20': '76px'
      }
    },
  },
  plugins: [],
}

