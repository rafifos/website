import { AppProps } from 'next/app'
import '../styles/globals.css'

function App({ Component, pageProps }: AppProps): unknown {
  return <Component {...pageProps} />
}

export default App
