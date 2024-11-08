/** @type {import('tailwindcss').Config} */
export default {
   content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryBg: 'rgba(255, 0, 0, 0.5)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(circle , #13493C -75%, rgba(12,12,12,1) 50%)',
        'dual-gradient': 'radial-gradient(ellipse at center left  , #13493C 0%, rgba(12,12,12,1) 45%)',
        'gradient-redial-2' : 'radial-gradient(circle at center right  ,#13493C 0%, rgba(12,12,12,1) 70%) '
      },
      
    },
  },
  plugins: [],
}

