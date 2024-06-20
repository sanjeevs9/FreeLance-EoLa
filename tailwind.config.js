/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'work-sans': ['"Work Sans"', 'sans-serif'],
        'cormorant-uni': ["Cormorant Unicase", 'serif'],
        'cormorant-gara':["Cormorant Garamond", 'serif']
      },
      textColor:{
        "Pred":"#f5989d"
      }
    },
  },
  plugins: [],
}

