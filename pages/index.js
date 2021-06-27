import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../component/Navbar'
import Header from '../component/Header'
import ContentStack from '../component/ContentStack'
import ChoseStack from '../component/ChoseStack'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
     
      <Navbar />
      <Header />
      <ContentStack />
      <ChoseStack />
      
    </div>
  )
}
