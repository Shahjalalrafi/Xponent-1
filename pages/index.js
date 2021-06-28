import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../component/Navbar'
import Header from '../component/Header'
import Banner from '../component/Banner'
import BannerDetails from '../component/BannerDetails'
import Integration from '../component/Integration'
import ContentStack from '../component/ContentStack'
import Partners from '../component/Partners'
import Compromise from '../component/Compromise'
import ChoseStack from '../component/ChoseStack'
import Mack from '../component/Mack'
import Courses from '../component/Courses'
import Footer from '../component/Footer'
import Believe from '../component/Believe'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
     
      <Navbar />
      <Header />
      <ContentStack />
      <ChoseStack />
      <Banner />
      <BannerDetails />
      <Integration />
      <Compromise />
      <Partners />
      <Mack />
      <Courses />
      <Believe />
      <Footer />

    </div>
  )
}
