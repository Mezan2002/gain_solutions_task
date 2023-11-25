/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      mini: "395px",
      // => @media (min-width: 380px) { ... }

      sm: "400px",
      // => @media (min-width: 440px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      miniXL: "1280px",
      // => @media (min-width: 1280px) { ... }

      xl: "1440px",
      // => @media (min-width: 1280px) { ... }

      // => @media (min-width: 1280px) { ... }

      "2xl": "1736px",
    },
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
  plugins: [require("daisyui")],
};
