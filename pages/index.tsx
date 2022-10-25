import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory
      overflow-scroll z-0'>
      <Head>
        <title>Gabriel Malek</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <Header/>
      <section id="hero" className='snap-center m-10'>
        <Hero/>
      </section>
      {/* Hero */}

      {/* About */}

      {/* Experience */}

      {/* Skills */}
      
      {/* Projects */}

      {/* Contact Me */}

    </div>
  )
}

export default Home
