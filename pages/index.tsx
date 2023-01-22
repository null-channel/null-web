import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Script from 'next/script';
import Header from '../components/navbar'


const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Enter the NULL</title>
        <meta name="description" content="Created by one of the worst front end developers of all time" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
      />

      <main className={styles.main}>
        <Image src="/null-logo.svg" alt="null" width="512" height="256" />
        <h1 className={styles.title}>
          The Null Awaits!
        </h1>
        
      </main>

      <footer className={styles.footer}>
        <a
          href="/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/null-logo.svg" alt="Null Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Home
