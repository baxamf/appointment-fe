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
    },
  },
  plugins: [],
};
