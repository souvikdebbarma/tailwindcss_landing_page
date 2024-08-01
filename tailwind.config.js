/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        playfair: "'Playfair Display', sarif",
        lato: "'Lato', sans-sarif",
      }
    },
  },
  plugins: [],
}

