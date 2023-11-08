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
        'body': '4rem'
      },
      maxWidth: {
        'base': '97.5rem'
      },
      colors: {
        dark: '#1A1820',
        brand: {
          red: {
            300: '#FA1A7C',
            600: '#F44'
          }
        }
      },
      lineHeight: {
        '20': '76px'
      }
    },
  },
  plugins: [],
}

