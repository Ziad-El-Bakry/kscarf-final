// k. SCARF — Tailwind Config | Developed by programmer Ziad Al-Bakry
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: "#b8860b",
          light:   "#daa520",
          dark:    "#8b6914",
          pale:    "#e8d48a",
        },
      },
      fontFamily: {
        cairo:    ["Cairo", "sans-serif"],
        display:  ["Georgia", "Times New Roman", "serif"],
        mono:     ["Courier New", "monospace"],
      },
    },
  },
  plugins: [],
};
