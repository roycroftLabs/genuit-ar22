/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/templates/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.5rem",
        sm: "1.5rem",
        md: "1.5rem",
        lg: "2rem",
      },
    },
    fontFamily: {
      poppins: ['"Poppins"', "Arial", "sans-serif"],
    },
    fontSize: {
      sm: "0.875rem", //14px
      base: "1rem", //16px
      md: "1.3125rem", //21px
      xl: "1.4375rem", //23px
      "2xl": "2.125rem", //34px
      "3xl": "2.5rem", //40px
      "4xl": "3.25rem", //52px
      "5xl": "4.125rem", //66px
      "6xl": "4.375rem", //70px
      "7xl": "5rem", //80px
    },
    lineHeight: {
      // leading
      none: "1",
      tight: "1.1",
      snug: "1.25",
      normal: "1.4",
      relaxed: "1.5",
    },
    colors: {
      primary: "#F5F1E9",
      secondary: "#F0947F",
      white: "#fff",
      black: "#111111",
      charcoal: "#454444",
      grey: {
        smoke: "#F7F7F7",
        light: "",
        medium: "#ADBAC2",
        dark: "",
      },
      "white-veil": "rgba(255,255,255,0.7)",
      transparent: "rgba(255,255,255,0)",
      alphas: {},
      gradients: {},
      error: "red",
      success: "green",
    },
    extend: {
      backgroundImage: {
        hero: "url('images/hero.png')",
      },
      gridTemplateColumns: {},
      gridTemplateRows: {},
    },
  },
  plugins: [
    // require("@tailwindcss/forms")
  ],
}

// breakpoints
// spacing
// typography: font-fam + sizes
