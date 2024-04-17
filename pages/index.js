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
        <Header title="Gilma Cottage" />
        <p className="description">
          Coming Soon
        </p>

        <br/>

        <h5 className="description">
          Cecil Rodrigo
        </h5>
    
        <p className="description">
          <a href="mailto:gilmacottage@gmail.com">gilmacottage@gmail.com</a>
        </p>

        <p className="description">
          <a href="tel:‭+94773619339‬">‭+94 (77) 361 9339‬</a>
        </p>
      </main>

      <Footer />
    </div>
  )
}
