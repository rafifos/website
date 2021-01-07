import { ColorModeScript } from '@chakra-ui/react'
import NextDocument, { Head, Html, Main, NextScript } from 'next/document'

export default class Document extends NextDocument {
  render(): JSX.Element {
    return (
      <Html lang='pt-BR'>
        <Head>
          <title>Coming soon</title>
          <link rel='icon' href='/favicon.ico' />
          <meta name='description' content='Made with lots of ❤️ and ☕' />
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
