/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        rubik: '"Rubik", sans-serif',
      },
      colors: {
        brand: {
          50: "#fef5ee",
          100: "#fde8d3",
          200: "#fbcea7",
          300: "#f8a96f",
          400: "#f47b3a",
          500: "#e85d1f",
          600: "#cf4814",
          700: "#a93611",
          800: "#862c14",
          900: "#6b2613",
        },
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.5s ease-out both",
      },
    },
  },
  plugins: [],
};
