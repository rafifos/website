import type { AppProps as NextAppProps } from "next/app";

import Head from "next/head";

import "styles/globals.css";

import { Iosevka } from "@/components";
import { env } from "@/utils";

async function getStaticProps() {
  let title = "rafifos.dev";
  const message = await fetch(env.MOTD_URL)
    .then((res) => res.text())
    .catch((err) => {
      if (err instanceof Error) return console.error(err.message);
      return console.error(err);
    });

  if (typeof message === "string") title = `${message} | ${title}`;

  return {
    props: { title },
  };
}

interface AppProps extends NextAppProps {
  title: string;
}

function App({ Component, pageProps, title }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title}</title>
      </Head>

      <Iosevka />
      <Component {...pageProps} />
    </>
  );
}

export default App;
export { getStaticProps };
