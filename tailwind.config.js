/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{html,js}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        Heading:['Mabry Pro'],
        default:['Mabry Pro']
      },
      backgroundColor: {
        'main': '#0A2647',
        'secondary':'#144272',    

      },
      
    },
 },
  plugins: [],
}
