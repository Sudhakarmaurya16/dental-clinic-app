/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // Yahan humne Fonts map kiye hain
      fontFamily: {
        sans: ["Inter", "sans-serif"], // Modern ke liye
        serif: ["Merriweather", "serif"], // Classic ke liye
        mono: ["Roboto Mono", "monospace"], // Creative ke liye
      },
    },
  },
  plugins: [],
};
