import Head from 'next/head'
import Image from 'next/image'
import YouTube from 'react-youtube'
import BlockQuote from '../components/HomePageComponents/BlockQuote/blockQuote'
import Contact from '../components/HomePageComponents/Contact'
import Gallery from '../components/HomePageComponents/Gallery'
import Instructors from '../components/HomePageComponents/Instructors'
import IntroContent from '../components/HomePageComponents/IntroContent/introContent'
import Services from '../components/HomePageComponents/Services'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Rumba 405 Home Page for Oklahoma City Salsa</title>
        <meta name="description" content="Rumba 405 Oklahoma Salsa team" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <IntroContent />
        <BlockQuote />
        <Instructors />
        <Services/>
        <Gallery />
        <Contact />
      </main>


    </div>
  )
}
