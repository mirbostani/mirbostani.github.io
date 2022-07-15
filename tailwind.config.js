const colors = require("tailwindcss/colors");

module.exports = {
  purge: [
    // Use *.tsx if using TypeScript
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class", // 'false' or 'media' or 'class'
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black, // #282a2e
      white: colors.white,
      gray: colors.trueGray,
      blue: colors.blue,
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
