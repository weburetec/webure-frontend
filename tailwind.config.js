const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
const plugin = require("tailwindcss/plugin");

module.exports = {
  mode: "jit",
  content: [
    "./public/**/*.html",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        trueGray: colors.neutral,
      },
    },
    fontFamily: {
      Lexend: ["Lexend", ...defaultTheme.fontFamily.sans],
      /*Josefin: ["Josefin Sans", ...defaultTheme.fontFamily.sans],*/
      Roboto: ["Roboto", ...defaultTheme.fontFamily.sans],
      Ubuntu: ["Ubuntu"],
      Montserrat: ["Montserrat", ...defaultTheme.fontFamily.sans],
      notoSans: ["Noto Sans", ...defaultTheme.fontFamily.sans],
      /*stock: [defaultTheme.fontFamily.sans],*/
    },
  },
  experimental: {
    nextScriptWorkers: true,
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
