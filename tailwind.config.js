/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      screens: {
        '2xl': '1440px',
        '3xl': '2520px'
      },
      padding: {
        DEFAULT: '2.5rem',
        '2xl': '5rem'
      }
    },
    extend: {
      scale: {
        input: '503px'
      },
      fontSize: {
        '2xs': '0.625rem'
      },
      colors: {
        rose: {
          500: '#FF385C'
        },
        pink: {
          500: '#D70565'
        }
      }
    }
  },
  plugins: [],
}
