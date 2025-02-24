/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'], // Combined content paths
  darkMode: "class", // Dark mode enabled
  theme: {
    extend: {
      colors: {
        dark: {
          DEFAULT: '#121212',
          100: '#1E1E1E',
          200: '#2D2D2D',
          300: '#3D3D3D',
          400: '#4D4D4D',
          500: '#5C5C5C',
        },
        // You can add other custom colors here if needed
      },
      animation: {
        scroll:
          "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
      },
      keyframes: {
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
      },
    },
  },
  plugins: [addVariablesForColors],
};

function addVariablesForColors({
  addBase,
  theme
}) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(Object.entries(allColors).map(([key, val]) => [`--${key}`, val]));
  addBase({
    ":root": newVars,
  });
}