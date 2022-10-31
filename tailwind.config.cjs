/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./praktijk.html",
    "./portfolio.html",
    "./coachpraktijk.html",
    "./tracker.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        shine: "shine 1s",
      },
      keyframes: {
        shine: {
          "100%": { left: "125%" },
        },
      },
    },
  },
  plugins: [],
}
