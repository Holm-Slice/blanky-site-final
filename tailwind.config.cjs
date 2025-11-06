/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "blanky-yellow": "#FEFEEF",
        "blanky-red": "#EF7760",
        "blanky-orange": "#fd5200",
        "blanky-peach": "#f9c784",
        "blanky-dark": "#262626",
        "blanky-grey": "#2a2a2a",
      },
      fontFamily: {
        custom1: ["custom1", "sans-serif"],
        custom2: ["custom2", "sans-serif"],
      },
      dropShadow: {
        blanky: "0px 0px 10px #EF7760",
        "blanky-red": "0px 0px 10px #EF7760",
      },
      boxShadow: {
        "blanky-glow": "0px 0px 7px #fd5200",
        "blanky-red-glow": "0px 0px 7px #EF7760",
        "blanky-indicator": "0px 0px 5px",
        "blanky-inset": "inset 190px 0 0 0 #fd5200",
        "blanky-red-inset": "inset 190px 0 0 0 #EF7760",
        "blanky-hover-extended": "inset 200px 0 0 -0.7rem #EF7760",
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
      transitionTimingFunction: {
        "ease-in-out": "cubic-bezier(0.7, 0, 0.2, 1)",
        "transition-all": "cubic-bezier(0.7, 0, 0.2, 1)",
      },
      transitionDuration: {
        700: "1000ms",
        2000: "2000ms",
        2500: "2500ms",
      },
    },
  },
  plugins: [],
};
