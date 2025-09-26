/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./layouts/**/*.html",      // all Hugo templates
    "./content/**/*.{md,html}", // markdown content
    "./assets/js/**/*.js",      // if you use Tailwind in JS
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
