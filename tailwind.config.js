/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        "medium": {'min': '1015px', 'max': '1200px'},
        "tablet":{'min': '745px', 'max': '900px'},
        "largeTablet":{'min':'901px', 'max': '1014px'},
        "mobile":{'min':'530px','max':'744px'},
        "smallMobile":{'min' : '0px', 'max': '529px'},
        "laptop":{'min': '1201px', 'max': '1800px'},
      },
      boxShadow: {
        "first":'100px 90px 80px 120px rgb(0, 0, 14) inset',
        "second":' 100px 90px 80px 120px #fb7185 inset'
      }
    },
  },
  plugins: [],
};
