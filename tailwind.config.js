const daisyui = require("daisyui");
const scrollbar = require("tailwind-scrollbar");

/** @type {import('tailwindcss').Config & { daisyui: import("daisyui").Config }} */
module.exports = {
  content: ["./src/app/**/*.{ts,tsx,mdx}", "./src/{atoms,molecules,organisms}/**/*.tsx"],
  plugins: [daisyui, scrollbar({ nocompatible: true })],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)"],
        mono: ["var(--font-jetbrains-mono)"],
      },
    },
  },
  daisyui: {
    themes: true,
  },
};
