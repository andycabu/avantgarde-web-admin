/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#9f3838",
        secundary: "#122860",
      },
      boxShadow: {
        personalized: "0 3px 14px rgb(135 117 104 / 15%);",
      },
      fontFamily: {
        sans: ["AvantGarde", "ui-sans-serif", "system-ui"],
      },
    },
  },
  plugins: [],
};
