/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
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
    fontWeight: {
      regular: "400",
      medium: "500",
      semibold: "600",
      bold: "700",
    },
    fontSize: {
      sm: "0.875rem", //14px
      base: "1rem", //16px
      md: "1.25rem", //20px
      xl: "1.375rem", //22px
      "2xl": "1.5rem", //24px
      "3xl": "1.875rem", //30px
      "4xl": "2rem", //32px
      "5xl": "2.5rem", //40px
      "6xl": "2.75rem", //44px
      "7xl": "3.75rem", //60px
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
      "royal-blue": "#004996",
      "midnight-purple": "#230A59",
      "royal-blue-alpha": "rgba(0, 73, 150, 0.9)",
      white: "#fff",
      black: "#111111",
      grey: {
        mist: "rgba(147, 160, 170, 0.1)",
        light: "",
        mid: "#93A0AA",
        dark: "",
      },
      transparent: "rgba(255,255,255,0)",
    },
    extend: {
      spacing: {
        22: "5.5rem",
      },
      backgroundImage: {
        // path starts from location of global.css
        hero: "url(../images/hero_background.jpg)",
      },
      gridTemplateColumns: {},
      gridTemplateRows: {},
    },
  },
  plugins: [
    // require("@tailwindcss/forms")
  ],
  safelist: [
    "text-white",
    "text-royal-blue",
    "text-royal-blue-alpha",
    "text-midnight-purple",
    "text-grey-mid",
  ],
}

// breakpoints
// spacing
// typography: font-fam + sizes