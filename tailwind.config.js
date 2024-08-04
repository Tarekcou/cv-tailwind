/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.html"],
  theme: {
    extend: {
      colors: {
        'navyblue': '#233A5F'
      }
    },
  },
  plugins: [],
}

// npx tailwindcss -i ./src/style.css -o ./src/output.css --watch