/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        home: "url('/src/assets/jordans/bg.jpg')",
      },
    },
  },
  plugins: [],
};
