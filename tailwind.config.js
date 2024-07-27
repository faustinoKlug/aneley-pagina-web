/** @type {import('tailwindcss').Config} */
module.exports = {
 content: ["./src/**/*.{html,js}"],
 theme: {
  extend: {
   colors: {
    "black-main": "#141518",
    "green-main": "#73ddcd"
   },
   maxWidth: {
    "1200px": "78rem"
   },
   fontFamily: {
    "Montserrat": "Montserrat",
    "Mulish": "Mulish"
   },
   screens: {
    "400px": "400px"
   }
  },
 },
 plugins: [],
};
