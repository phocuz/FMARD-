/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
     fontFamily:{
      sans:"Roboto, sans-serif",
    },
    extend: {
      boxShadow: {
        '3xl': "10px 10px black"
      },
      colors: {
        customYellow: '#FFA834', 
      },
    },
  },
  plugins: [],
}

