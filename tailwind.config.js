/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        genesis: {
          teal: '#01A9A0',
          tealDark: '#01857E',
          orange: '#F79321',
          navy: '#0B1C30',
          surface: '#F8FAF8',
          slate: '#41484D'
        }
      },
      fontFamily: {
        sans: ['Manrope', 'Cairo', 'sans-serif']
      }
    },
  },
  plugins: [],
};
