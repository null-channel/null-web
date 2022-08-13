import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Header from '../components/navbar'

function MyApp({ Component, pageProps }: AppProps) {

  return <div>
            <Header/>
            <Component {...pageProps} />
          </div>
}

export default MyApp
