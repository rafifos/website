const daisyui = require("daisyui");

/** @type {import('tailwindcss').Config & { daisyui: import("daisyui").config }} */
module.exports = {
  content: ["./src/app/**/*.{ts,tsx,mdx}", "./src/{atoms,molecules,organisms}/**/*.tsx"],
  plugins: [daisyui],
  daisyui: {
    themes: true,
  },
};
