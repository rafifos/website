import Head from "next/head";

const FONT_FILES_TTF = [
  "iosevka-custom-bolditalic.ttf",
  "iosevka-custom-boldoblique.ttf",
  "iosevka-custom-bold.ttf",
  "iosevka-custom-extendedbolditalic.ttf",
  "iosevka-custom-extendedboldoblique.ttf",
  "iosevka-custom-extendedbold.ttf",
  "iosevka-custom-extendedextrabolditalic.ttf",
  "iosevka-custom-extendedextraboldoblique.ttf",
  "iosevka-custom-extendedextrabold.ttf",
  "iosevka-custom-extendedextralightitalic.ttf",
  "iosevka-custom-extendedextralightoblique.ttf",
  "iosevka-custom-extendedextralight.ttf",
  "iosevka-custom-extendedheavyitalic.ttf",
  "iosevka-custom-extendedheavyoblique.ttf",
  "iosevka-custom-extendedheavy.ttf",
  "iosevka-custom-extendeditalic.ttf",
  "iosevka-custom-extendedlightitalic.ttf",
  "iosevka-custom-extendedlightoblique.ttf",
  "iosevka-custom-extendedlight.ttf",
  "iosevka-custom-extendedmediumitalic.ttf",
  "iosevka-custom-extendedmediumoblique.ttf",
  "iosevka-custom-extendedmedium.ttf",
  "iosevka-custom-extendedoblique.ttf",
  "iosevka-custom-extendedsemibolditalic.ttf",
  "iosevka-custom-extendedsemiboldoblique.ttf",
  "iosevka-custom-extendedsemibold.ttf",
  "iosevka-custom-extendedthinitalic.ttf",
  "iosevka-custom-extendedthinoblique.ttf",
  "iosevka-custom-extendedthin.ttf",
  "iosevka-custom-extended.ttf",
  "iosevka-custom-extrabolditalic.ttf",
  "iosevka-custom-extraboldoblique.ttf",
  "iosevka-custom-extrabold.ttf",
  "iosevka-custom-extralightitalic.ttf",
  "iosevka-custom-extralightoblique.ttf",
  "iosevka-custom-extralight.ttf",
  "iosevka-custom-heavyitalic.ttf",
  "iosevka-custom-heavyoblique.ttf",
  "iosevka-custom-heavy.ttf",
  "iosevka-custom-italic.ttf",
  "iosevka-custom-lightitalic.ttf",
  "iosevka-custom-lightoblique.ttf",
  "iosevka-custom-light.ttf",
  "iosevka-custom-mediumitalic.ttf",
  "iosevka-custom-mediumoblique.ttf",
  "iosevka-custom-medium.ttf",
  "iosevka-custom-oblique.ttf",
  "iosevka-custom-regular.ttf",
  "iosevka-custom-semibolditalic.ttf",
  "iosevka-custom-semiboldoblique.ttf",
  "iosevka-custom-semibold.ttf",
  "iosevka-custom-thinitalic.ttf",
  "iosevka-custom-thinoblique.ttf",
  "iosevka-custom-thin.ttf",
];

const FONT_FILES_WOFF2 = [
  "iosevka-custom-bolditalic.woff2",
  "iosevka-custom-boldoblique.woff2",
  "iosevka-custom-bold.woff2",
  "iosevka-custom-extendedbolditalic.woff2",
  "iosevka-custom-extendedboldoblique.woff2",
  "iosevka-custom-extendedbold.woff2",
  "iosevka-custom-extendedextrabolditalic.woff2",
  "iosevka-custom-extendedextraboldoblique.woff2",
  "iosevka-custom-extendedextrabold.woff2",
  "iosevka-custom-extendedextralightitalic.woff2",
  "iosevka-custom-extendedextralightoblique.woff2",
  "iosevka-custom-extendedextralight.woff2",
  "iosevka-custom-extendedheavyitalic.woff2",
  "iosevka-custom-extendedheavyoblique.woff2",
  "iosevka-custom-extendedheavy.woff2",
  "iosevka-custom-extendeditalic.woff2",
  "iosevka-custom-extendedlightitalic.woff2",
  "iosevka-custom-extendedlightoblique.woff2",
  "iosevka-custom-extendedlight.woff2",
  "iosevka-custom-extendedmediumitalic.woff2",
  "iosevka-custom-extendedmediumoblique.woff2",
  "iosevka-custom-extendedmedium.woff2",
  "iosevka-custom-extendedoblique.woff2",
  "iosevka-custom-extendedsemibolditalic.woff2",
  "iosevka-custom-extendedsemiboldoblique.woff2",
  "iosevka-custom-extendedsemibold.woff2",
  "iosevka-custom-extendedthinitalic.woff2",
  "iosevka-custom-extendedthinoblique.woff2",
  "iosevka-custom-extendedthin.woff2",
  "iosevka-custom-extended.woff2",
  "iosevka-custom-extrabolditalic.woff2",
  "iosevka-custom-extraboldoblique.woff2",
  "iosevka-custom-extrabold.woff2",
  "iosevka-custom-extralightitalic.woff2",
  "iosevka-custom-extralightoblique.woff2",
  "iosevka-custom-extralight.woff2",
  "iosevka-custom-heavyitalic.woff2",
  "iosevka-custom-heavyoblique.woff2",
  "iosevka-custom-heavy.woff2",
  "iosevka-custom-italic.woff2",
  "iosevka-custom-lightitalic.woff2",
  "iosevka-custom-lightoblique.woff2",
  "iosevka-custom-light.woff2",
  "iosevka-custom-mediumitalic.woff2",
  "iosevka-custom-mediumoblique.woff2",
  "iosevka-custom-medium.woff2",
  "iosevka-custom-oblique.woff2",
  "iosevka-custom-regular.woff2",
  "iosevka-custom-semibolditalic.woff2",
  "iosevka-custom-semiboldoblique.woff2",
  "iosevka-custom-semibold.woff2",
  "iosevka-custom-thinitalic.woff2",
  "iosevka-custom-thinoblique.woff2",
  "iosevka-custom-thin.woff2",
];

function Iosevka() {
  return (
    <Head>
      {FONT_FILES_TTF.map((fontFile, index) => (
        <link
          key={index}
          rel="preload"
          href={`/fonts/iosevka-custom/ttf/${fontFile}`}
          type="font/ttf"
          as="font"
          crossOrigin=""
        />
      ))}

      {FONT_FILES_WOFF2.map((fontFile, index) => (
        <link
          key={index}
          rel="preload"
          href={`/fonts/iosevka-custom/woff2/${fontFile}`}
          type="font/woff2"
          as="font"
          crossOrigin=""
        />
      ))}
    </Head>
  );
}

export default Iosevka;
