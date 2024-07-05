/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customBg: {
          50: "#edead4",
          100: "#edead4e8",
        },
      },
      fontFamily: {
        raleway: ["Raleway", "sans-serif"],
        wixui: ["WixUIRich", "sans-serif"],
        dancing: ["DancingScript", "cursive"],
      },
    },
  },
  plugins: [],
};
