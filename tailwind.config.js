/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./test.html",
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/**/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "blanky-yellow": "#f9ec36",
        "blanky-orange": "#fd5200",
        "blanky-peach": "#f9c784",
        "blanky-dark": "#262626",
      },
      fontFamily: {
        custom1: ["custom1", "sans-serif"],
        custom2: ["custom2", "sans-serif"],
      },
      dropShadow: {
        blanky: "0px 0px 10px #f9ec36",
      },
      boxShadow: {
        "blanky-glow": "0px 0px 7px #fd5200",
        "blanky-indicator": "0px 0px 5px",
        "blanky-inset": "inset 190px 0 0 0 #fd5200",
      },
      animation: {
        "slide-fade": "slide-fade 2s ease-in-out",
      },
      keyframes: {
        "slide-fade": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      transitionProperty: {
        "box-shadow": "box-shadow",
      },
    },
  },
  plugins: [],
};
