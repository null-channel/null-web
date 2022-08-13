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
          Welcome to the Null!
        </h1>


        <div className={styles.grid}>
          <a href="https://www.youtube.com/channel/UCfrwHFvGCdf0_nVW4seBwrg" className={styles.card}>
            <h2>Videos &rarr;</h2>
            <p>Find videos on all my favorite topics!</p>
          </a>

          <a href="/blog/" className={styles.card}>
            <h2>Blog &rarr;</h2>
            <p>A blog about what we are doing!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Soon &rarr;</h2>
            <p>Discover features and things coming soon?! Yes.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Odd &rarr;</h2>
            <p>
              Looks odd without 4th a box. only aesthetic value
            </p>
          </a>
        </div>
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
