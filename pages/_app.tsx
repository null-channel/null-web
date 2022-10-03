import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Header from '../components/navbar'
import styles from '../styles/main.module.css'

function MyApp({ Component, pageProps }: AppProps) {

  return <div className={styles.main}>
            <Header/>
            <Component {...pageProps} />
          </div>
}

export default MyApp
