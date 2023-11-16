/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'my-blue1': '#7E90FE',
      'my-blue2': '#9873FF',
      'my-black': '#1A1919',
      'my-black2': '#757575',
      'my-light-blue1': 'rgba(126, 144, 254, 0.05)',
      'my-light-blue2': 'rgba(152, 115, 255, 0.05) ',
      'my-light-white': 'rgba(255, 255, 255, 0.70)',
      'my-light-white40': 'rgba(255, 255, 255, 0.40)',
      'my-white': '#FFF',
    },
    extend: {},
  },
  plugins: [],
}

// linear-gradient(90deg,  0%, rgba(152, 115, 255, 0.05) 100%)
// linear-gradient(90deg, #7E90FE 0%, #9873FF 100%)