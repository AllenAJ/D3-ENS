/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'ens-blue': '#4C82FB',
        'ens-blue-dark': '#3E74E7',
        'ens-green': '#45B882',
        'ens-green-dark': '#3DA876',
      },
    },
  },
  plugins: [],
}