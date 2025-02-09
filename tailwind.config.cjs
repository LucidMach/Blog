/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        comfortaa: ["Comfortaa", "sans-serif"],
        virgil: ["Virgil", "sans-serif"],
        vampiro: ["Vampiro", "sans-serif"],
        assistant: ["Assistant", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
