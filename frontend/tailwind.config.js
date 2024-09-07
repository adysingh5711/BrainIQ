/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        theme: "#ff8531",
        primary: "#12181e",
        temporary: "#fa7531",
        medium: "#fff",

        background: "#fbfbfb",
      },
      fontFamily: {
        merri: ["Merriweather", "serif"],
        comf: ["Comfortaa", "cursive"],
        right: ["Righteous", "cursive"],
      },
    },
  },
  plugins: [],
};
