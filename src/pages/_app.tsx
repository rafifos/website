import { ChakraProvider } from '@chakra-ui/react'
import { AppProps } from 'next/app'

function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ChakraProvider resetCSS>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default App
