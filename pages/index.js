import Head from 'next/head'
import Image from 'next/image'
import Footer from '../comps/Footer'
import Navbar from '../comps/Navbar'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
      <title>client List | Home</title>
      <meta name="keywords" content="clients" />
      </Head>
    <div>
      <h1 className={styles.title}>Homepage</h1>
      <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae perferendis, hic repellendus non provident, autem iste amet sed voluptatibus adipisci saepe molestiae itaque ipsum earum est minus, nisi iusto sapiente!</p>
      <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae perferendis, hic repellendus non provident, autem iste amet sed voluptatibus adipisci saepe molestiae itaque ipsum earum est minus, nisi iusto sapiente!</p>
        <Link href="/clients">
          <a className={styles.btn}>See Client Listing</a>
        </Link>  
    
    </div>
   </>
  )
}
