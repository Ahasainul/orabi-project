/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // width
      maxWidth: {
        'container': '1600px',
      },
      spacing: {
        'width': '15%',
        'widthtow': '27.5%',
      },
      // colour
      colors: {
        'ash': '#767676',
        'navBg': '#F5F5F3',
        'borDer': '#979797',
      },
      // fontfamily
      fontFamily: {
        'dm': ['DM Sans','sans-serif' ],
      },
    },
  },
  plugins: [],
}

