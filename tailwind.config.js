/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2C67FF",
        secondary: "#5C5D76",
        "primary-dark": "#1A3AA1",
        "primary-bg": "#F3F4F8",
        "gray-light": "#8D91A5",
      },
    },
  },
  plugins: [],
};
