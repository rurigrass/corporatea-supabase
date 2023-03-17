import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Header from '@/components/Header'
import Banner from '@/components/Banner'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto bg-blue-tintiest">
      <Head>
        <title>Bulby Leaks</title>
      </Head>
      <Header />
      <Banner />
    </div>
  )
}
