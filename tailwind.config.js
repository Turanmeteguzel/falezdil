/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      // Make Noto Sans the default; keep Lato as fallback
      sans: ["Noto Sans", "Lato", "sans-serif"],
    },
    extend: {
      fontFamily: {
        lato: ["Noto Sans", "Lato", "sans-serif"],
      },
      fontWeight: {
        light: "300",
        normal: "400",
        bold: "700",
      },
    },
  },
  plugins: [],
};
