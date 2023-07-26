/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      "3xl": "1850px",
      "4xl": "2300px",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1.5rem",
        md: "2rem",
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
      orange: "#FFA644",
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
      dropShadow: {
        black: "8px 8px 16px #000000",
      },
      backgroundImage: {
        // path starts from location of global.css
        hero: "url(../images/hero_background.jpg)",
        "banner-sustainable":
          "url(../images/carousel/sustainable-buildings-banner.jpg)",
        "banner-talent":
          "url(../images/carousel/celebrating-talent-banner.jpg)",
        "banner-water": "url(../images/carousel/water-management-banner.jpg)",
        "banner-carbon":
          "url(../images/carousel/driving-out-carbon-banner.jpg)",
        "banner-climate":
          "url(../images/carousel/climate-management-banner.jpg)",
      },
      gridTemplateColumns: {},
      gridTemplateRows: {},
    },
  },
  safelist: [
    "text-white",
    "text-royal-blue",
    "text-royal-blue-alpha",
    "text-midnight-purple",
    "text-grey-mid",
    "bg-banner-sustainable",
    "bg-banner-talent",
    "bg-banner-water",
    "bg-banner-carbon",
    "bg-banner-climate",
    "row-start-0",
    "row-start-1",
    "row-start-2",
    "xl:row-start-3",
    "row-start-4",
    "row-start-5",
    "w-16",
    "w-10",
    "h-16",
    "h-10",
  ],
}

// breakpoints
// spacing
// typography: font-fam + sizes
