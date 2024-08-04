/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        'navyblue': '#233A5F'
      },
      borderColor: {
        'red':'#fff'
      }

    },
  },
  plugins: [],
}

// npx tailwindcss -i ./src/style.css -o ./src/output.css --watch