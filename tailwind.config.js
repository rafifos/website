const daisyui = require("daisyui");

/** @type {import('tailwindcss').Config & { daisyui: import("daisyui").Config }} */
module.exports = {
  content: ["./src/app/**/*.{ts,tsx,mdx}", "./src/{atoms,molecules,organisms}/**/*.tsx"],
  plugins: [daisyui],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)"],
        mono: ["var(--font-iosevka)"],
      },
    },
  },
  daisyui: {
    themes: true,
  },
};
