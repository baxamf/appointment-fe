/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "3xl": "0 0 32px 0 rgba(72, 30, 20, 0.5)",
      },
    },
    colors: {
      primary: "rgb(155, 57, 34)",
      secondary: "rgb(72, 30, 20)",
      accent: "rgb(242, 97, 63)",
      colorBg: "rgb(12, 12, 12)",
      sand: {
        50: "#fdf6ef",
        100: "#fbead9",
        200: "#f6d2b2",
        300: "#f0b381",
        400: "#e98b4e",
        500: "#e36c2c",
        600: "#d55421",
        700: "#b13f1d",
        800: "#9b3922",
        900: "#164e63",
        950: "#3d140d",
      },
    },
  },
  plugins: [],
};
