import Head from 'next/head'
import Home from './home/Home'

export default function Main() {
  return (
    <div className="container">
      <Head>
        <title>Scenario</title>
        <meta name="description" content="A financial budgeting and debt projection tool." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="main">
        <Home />
      </main>

      <footer className="footer">
        <div>
          Powered by <strong>Austin Killian</strong>
        </div>
      </footer>
    </div>
  )
}
