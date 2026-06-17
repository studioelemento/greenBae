/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          900: '#1c3e1e', // Dark green text
          800: '#2b5229',
          700: '#3c6e37',
          600: '#4d8745', // Green main buttons
          500: '#61a355',
        },
        background: {
          default: '#fcfcfc',
          alt: '#f4f5f2' // footer background
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['"Inter"', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
