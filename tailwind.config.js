/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        valRed: '#ff4655', 
        valDark: '#0f1923',
        valWhite: '#ece8e1',
        valGray: '#8b978f',
        valBlack: '#111111'
      },
      fontFamily: {
        'val-heading': ['Anton', 'sans-serif'],
        'val-text': ['Oswald', 'sans-serif'],
      },
      backgroundImage: {
        'grid-pattern': "url('data:image/svg+xml,%3Csvg width=\\'40\\' height=\\'40\\' viewBox=\\'0 0 40 40\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cpath d=\\'M0 0h40v40H0V0zm1 1h38v38H1V1z\\' fill=\\'%23ffffff\\' fill-opacity=\\'0.05\\' fill-rule=\\'evenodd\\'/%3E%3C/svg%3E')",
      }
    },
  },
  plugins: [],
}
