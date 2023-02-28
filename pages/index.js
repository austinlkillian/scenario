import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Home from './home/Home'

export default function Main() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Debt Projector</title>
        <meta name="description" content="Project how long until you are debt free." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Home />
      </main>

      <footer className={styles.footer}>
        <div>
          Powered by <strong>Austin Killian</strong>
        </div>
      </footer>
    </div>
  )
}
