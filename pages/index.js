import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my app!" />
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
        <form name="test" method="POST" data-netlify="true">
          <p><label>HEJHEJ: <input type="text" name="name"></input></label></p>
        </form>
      </main>

      <Footer />
    </div>
  )
}
