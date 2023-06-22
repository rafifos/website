import { Inter } from "next/font/google";
import localFont from "next/font/local";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const iosevka = localFont({
  variable: "--font-iosevka",
  display: "swap",
  fallback: [
    "Consolas",
    "Andale Mono WT",
    "Andale Mono",
    "Lucida Console",
    "Lucida Sans Typewriter",
    "DejaVu Sans Mono",
    "Bitstream Vera Sans Mono",
    "Liberation Mono",
    "Nimbus Mono L",
    "Monaco",
    "Courier New",
    "Courier",
    "monospace",
  ],
  src: [
    { path: "./iosevka/iosevka-custom-thin.woff2", weight: "100", style: "normal" },
    { path: "./iosevka/iosevka-custom-thinitalic.woff2", weight: "100", style: "italic" },
    { path: "./iosevka/iosevka-custom-thinoblique.woff2", weight: "100", style: "oblique" },
    { path: "./iosevka/iosevka-custom-extralight.woff2", weight: "200", style: "normal" },
    { path: "./iosevka/iosevka-custom-extralightitalic.woff2", weight: "200", style: "italic" },
    { path: "./iosevka/iosevka-custom-extralightoblique.woff2", weight: "200", style: "oblique" },
    { path: "./iosevka/iosevka-custom-light.woff2", weight: "300", style: "normal" },
    { path: "./iosevka/iosevka-custom-lightitalic.woff2", weight: "300", style: "italic" },
    { path: "./iosevka/iosevka-custom-lightoblique.woff2", weight: "300", style: "oblique" },
    { path: "./iosevka/iosevka-custom-regular.woff2", weight: "400", style: "normal" },
    { path: "./iosevka/iosevka-custom-italic.woff2", weight: "400", style: "italic" },
    { path: "./iosevka/iosevka-custom-oblique.woff2", weight: "400", style: "oblique" },
    { path: "./iosevka/iosevka-custom-medium.woff2", weight: "500", style: "normal" },
    { path: "./iosevka/iosevka-custom-mediumitalic.woff2", weight: "500", style: "italic" },
    { path: "./iosevka/iosevka-custom-mediumoblique.woff2", weight: "500", style: "oblique" },
    { path: "./iosevka/iosevka-custom-semibold.woff2", weight: "600", style: "normal" },
    { path: "./iosevka/iosevka-custom-semibolditalic.woff2", weight: "600", style: "italic" },
    { path: "./iosevka/iosevka-custom-semiboldoblique.woff2", weight: "600", style: "oblique" },
    { path: "./iosevka/iosevka-custom-bold.woff2", weight: "700", style: "normal" },
    { path: "./iosevka/iosevka-custom-bolditalic.woff2", weight: "700", style: "italic" },
    { path: "./iosevka/iosevka-custom-boldoblique.woff2", weight: "700", style: "oblique" },
    { path: "./iosevka/iosevka-custom-extrabold.woff2", weight: "800", style: "normal" },
    { path: "./iosevka/iosevka-custom-extrabolditalic.woff2", weight: "800", style: "italic" },
    { path: "./iosevka/iosevka-custom-extraboldoblique.woff2", weight: "800", style: "oblique" },
    { path: "./iosevka/iosevka-custom-heavy.woff2", weight: "900", style: "normal" },
    { path: "./iosevka/iosevka-custom-heavyitalic.woff2", weight: "900", style: "italic" },
    { path: "./iosevka/iosevka-custom-heavyoblique.woff2", weight: "900", style: "oblique" },
  ],
});

export { inter, iosevka };
