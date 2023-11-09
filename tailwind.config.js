/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'geomanist': 'geomanistregular',
      },
      fontSize: {
        'display-3xl': '2rem',
        'display-4xl': '2.5rem',
        'display-6xl': '4rem',
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
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      'xxl': '1440px'
    },
  },
  plugins: [],
}

