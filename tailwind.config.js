/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bannerImg': "url('/src/assets//banner.png')",
      },
      colors: {
        'buttonColor': ' ',
      },
    },
  },
  plugins: [require("daisyui")],
}

