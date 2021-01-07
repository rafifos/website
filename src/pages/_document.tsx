import { ColorModeScript } from '@chakra-ui/react'
import NextDocument, { Head, Html, Main, NextScript } from 'next/document'

export default class Document extends NextDocument {
  render(): JSX.Element {
    return (
      <Html>
        <Head>
          <title>Coming soon...</title>
          <link rel='icon' href='/favicon.ico' />
        </Head>
        <body>
          <ColorModeScript />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
