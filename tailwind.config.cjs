/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        virgil: ["Virgil", "sans-serif"],
        assistant: ["Assistant", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
