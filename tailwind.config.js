module.exports = {
  content: [
    "./src/pages/**/*.{jsx, js}",
    "./src/features/**/*.{jsx, js}",
    "./src/ui/**/*.{jsx, js}",
  ],
  important: true,
  theme: {
    extend: {
      fontFamily: {
        hero: ["Bebas Neue", "sans-serif"],
        sans: ["Airbnb Cereal", "sans-serif"],
      },
      colors: {
        red: {
          50: "#FFF5F5",
          100: "#FEECEC",
          200: "#FDCDCB",
          300: "#FCA9A9",
          400: "#FA7474",
          500: "#FF4B4B",
          600: "#E33535",
          700: "#C01F1F",
          800: "#9E0A0A",
          900: "#7D0000",
        },
        blue: {
          50: "#f3f7fe",
          100: "#dbe2f9",
          200: "#b6c7f0",
          300: "#8caee6",
          400: "#6695dc",
          500: "#4b98ff",
          600: "#3676e0",
          700: "#275ecc",
          800: "#1d46a5",
          900: "#12317f",
        },
        purple: {
          50: "#f2f0f7",
          100: "#e6e0ef",
          200: "#c1b3d7",
          300: "#9c85bf",
          400: "#6c5b8f",
          500: "#3d3160",
          600: "#342b56",
          700: "#2a254b",
          800: "#28223d",
          900: "#191a34",
        },
        pink: {
          50: "#ffe4f0",
          100: "#ffb3cf",
          200: "#fa80ad",
          300: "#fa4d8c",
          400: "#fa2974",
          500: "#fa2874",
          600: "#e0246a",
          700: "#c71f5f",
          800: "#ae1a55",
          900: "#940f48",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
