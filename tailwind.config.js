/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/**/*.{html,js}"],
  theme: {
    screens: {
      'sm' : '320px',
      'md' : '640px',
      'lg' : '1020px',
    }
    // extend: {
     
    // },
  
  },
  plugins: [],
}
