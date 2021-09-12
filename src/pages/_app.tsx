import type { AppProps as WebsiteProps } from "next/app";

import { ChakraProvider } from "@chakra-ui/react";

import theme from "theme";

function Website({ Component, pageProps }: WebsiteProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default Website;
