/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        "medium": {'min': '1015px', 'max': '1200px'},
        "mobile":{'min': '360px', 'max': '1014px'},
      },
    },
  },
  plugins: [],
};
