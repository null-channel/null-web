import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Header from '../components/navbar'
import styles from '../styles/main.module.css'
import { UserProvider } from '@auth0/nextjs-auth0';
import SidePanel from '../components/landing-page/side-panel/side-panel'

function MyApp({ Component, pageProps }: AppProps) {

  return <div className={styles.main}>
            <UserProvider>
              <Header/>
              <SidePanel></SidePanel>
              <Component {...pageProps} />
            </UserProvider>
          </div>
}

export default MyApp
