/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      black: "#000000",
      white: "#ffffff",
      primary: "#6f8779",
      mediumGreen: "#4f6152",
      darkGreen: "#202721",
      lightGreen: "#e2ece3",
      paleGreen: "#d2dfd4",
      background: "#ecf3ed",
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        lightMode: {
          primary: "#6f8779",
        },
      },
    ],
  },
};
