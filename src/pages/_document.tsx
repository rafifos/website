import NextDocument, { Head, Html, Main, NextScript } from 'next/document'

export default class Document extends NextDocument {
  render(): JSX.Element {
    return (
      <Html lang='pt-BR'>
        <Head>
          <link rel='icon' href='/favicon.ico' />
          <meta name='description' content='Made with lots of ❤️ and ☕' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
