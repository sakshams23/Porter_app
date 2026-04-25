/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        richblack: {
          5: "#F1F2FF",
          25: "#DBDDEA",
          100: "#AFB2BF",
          200: "#999DAA",
          700: "#2C333F",
          800: "#161D29",
          900: "#000814",
        },
        blue: {
          100: "#47A5C5",
        },
        pink: {
          200: "#EF476F",
        },
        yellow: {
          50: "#FFD60A",
        },
        skin: {
          200: "#F8BA93",
        },
      },
      screens: {
        // Custom screen sizes
           // Small screens (phones, 640px and up)
        'md': '1024px',   // Large screens (desktops, 1024px and up)
        'xl': '1280px',  // 2x Extra large screens (larger desktops, 1536px and up)
        // You can add more custom breakpoints if needed
      },
    },
  },
  plugins: [],
};
