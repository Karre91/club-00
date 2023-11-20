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
      <form name="contact v1" method='POST' data-netlify='true' onSubmit='submit'>
<input type='hidden' name='form-name' value='contact v1'/>

<label>NAME
  <input type='text' name='name'/>
</label>
<button type='submit'>SUBBE</button>

      </form>
      </main>

      <Footer />
    </div>
  )
}
